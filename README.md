# GraphQL Demo

## Getting Started

`docker-compose -f stack.yml up`<br/>
`cd server/ && node .`<br/>
`cd client/ && npm start`

## GraphiQL example

```
query AllNotes {
  notes {
    id
    title
    body
    checklists {
      body
      isChecked
    }
  }
}

query ANote {
  note(id: "5e7335cb48fa87737e6c1a5d") {
    id
    title
    body
  }
}

mutation CreateNote {
  createNote(
    title: "survive covid",
    body: "...",
    checklists: [
      {body: "stay home"},
      {body: "buy food"}
    ]
  ) {
    id
    title
  }
}

mutation ToggleComplete {
  toggleComplete(
    id: "5e73c82bf18800e8ba13d04e", 
    checklistBodies: ["stay home", "buy food"]
  ) {
    id
    checklists {
      body
      isChecked
    }
  }
}
```
