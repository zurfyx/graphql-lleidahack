const {MongoClient, ObjectId} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const cors = require('cors');

const app = express();

app.use(cors());

const URL = 'http://localhost';
const PORT = 3001;
const MONGO_URL = 'mongodb://root:example@localhost:27017';
const DATABASE = 'graphql-demo';

(async () => {
  const client = await MongoClient.connect(MONGO_URL, { useUnifiedTopology: true });
  var db = client.db(DATABASE);

  const Notes = db.collection('notes');

  const typeDefs = [`
    type Query {
      note(id: String): Note
      notes: [Note]
    }
    type Note {
      id: ID
      title: String
      body: String
      checklists: [Checklist]
    }
    type Checklist {
      body: String
      isChecked: Boolean
    }
    input ChecklistInput {
      body: String
    }
    type Mutation {
      createNote(title: String!, body: String, checklists: [ChecklistInput]): Note
      toggleComplete(id: ID, checklistBodies: [String!]!): Note
    }
    schema {
      query: Query
      mutation: Mutation
    }
  `];

  const mapDbIdToGraphQL = obj => {
    obj.id = obj._id;
    return obj;
  };

  const resolvers = {
    Query: {
      note: async (root, {id}) => {
        return mapDbIdToGraphQL(await Notes.findOne(ObjectId(id)));
      },
      notes: async (root) => {
        return (await Notes.find({}).toArray()).map(mapDbIdToGraphQL);
      },
    },
    Note: {
      // If it lived on a separate collection we'd need to implement our own resolver for this
      // checklist: async ({id}) => {
      //   
      // }
    },
    Mutation: {
      createNote: async (root, args, context, info) => {
        console.info(args);
        const {insertedId} = await Notes.insertOne(args);
        return mapDbIdToGraphQL(await Notes.findOne(insertedId));
      },
      toggleComplete: async (root, args, context, info) => {
        console.info(args);
        const bodies = new Set(args.checklistBodies);
        const note = await Notes.findOne(ObjectId(args.id))
        if (note.checklists) {
          const newChecklists = note.checklists.map(c => {
            if (bodies.has(c.body)) {
              return {
                body: c.body,
                isChecked: c.isChecked === true ? false : true,
              }
            } else {
              return c;
            }
          });
          await Notes.findOneAndReplace({_id: note._id}, {...note, checklists: newChecklists});
          return await mapDbIdToGraphQL(await Notes.findOne(note._id));
        }
        return note;
      }
    },
  };

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));

  app.listen(PORT, () => {
    console.log(`${URL}:${PORT}/graphiql`)
  });
})();
