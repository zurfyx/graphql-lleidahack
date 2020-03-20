/**
 * @flow
 * @relayHash 3f177d7b7dd2f672b2cf9e6b2b714824
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Note_note$ref = any;
export type NoteChecklistItemToggleCompleteMutationVariables = {|
  id: string,
  checklistBodies: $ReadOnlyArray<string>,
|};
export type NoteChecklistItemToggleCompleteMutationResponse = {|
  +toggleComplete: ?{|
    +$fragmentRefs: Note_note$ref
  |}
|};
export type NoteChecklistItemToggleCompleteMutation = {|
  variables: NoteChecklistItemToggleCompleteMutationVariables,
  response: NoteChecklistItemToggleCompleteMutationResponse,
|};
*/


/*
mutation NoteChecklistItemToggleCompleteMutation(
  $id: ID!
  $checklistBodies: [String!]!
) {
  toggleComplete(id: $id, checklistBodies: $checklistBodies) {
    ...Note_note
    id
  }
}

fragment Note_note on Note {
  id
  title
  body
  checklists {
    body
    isChecked
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "checklistBodies",
    "type": "[String!]!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "checklistBodies",
    "variableName": "checklistBodies"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NoteChecklistItemToggleCompleteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleComplete",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Note",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Note_note",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NoteChecklistItemToggleCompleteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleComplete",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Note",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "checklists",
            "storageKey": null,
            "args": null,
            "concreteType": "Checklist",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isChecked",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "NoteChecklistItemToggleCompleteMutation",
    "id": null,
    "text": "mutation NoteChecklistItemToggleCompleteMutation(\n  $id: ID!\n  $checklistBodies: [String!]!\n) {\n  toggleComplete(id: $id, checklistBodies: $checklistBodies) {\n    ...Note_note\n    id\n  }\n}\n\nfragment Note_note on Note {\n  id\n  title\n  body\n  checklists {\n    body\n    isChecked\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '64ceb87c886a35f456c696543faccf4f';

module.exports = node;
