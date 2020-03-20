/**
 * @flow
 * @relayHash 151b4b4ed186c76b420d576428570102
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChecklistInput = {|
  body?: ?string
|};
export type InputCardCreateNoteMutationVariables = {|
  title: string,
  body?: ?string,
  checklists?: ?$ReadOnlyArray<?ChecklistInput>,
|};
export type InputCardCreateNoteMutationResponse = {|
  +createNote: ?{|
    +id: ?string,
    +title: ?string,
  |}
|};
export type InputCardCreateNoteMutation = {|
  variables: InputCardCreateNoteMutationVariables,
  response: InputCardCreateNoteMutationResponse,
|};
*/


/*
mutation InputCardCreateNoteMutation(
  $title: String!
  $body: String
  $checklists: [ChecklistInput]
) {
  createNote(title: $title, body: $body, checklists: $checklists) {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "body",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "checklists",
    "type": "[ChecklistInput]",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createNote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "body",
        "variableName": "body"
      },
      {
        "kind": "Variable",
        "name": "checklists",
        "variableName": "checklists"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "InputCardCreateNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "InputCardCreateNoteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "InputCardCreateNoteMutation",
    "id": null,
    "text": "mutation InputCardCreateNoteMutation(\n  $title: String!\n  $body: String\n  $checklists: [ChecklistInput]\n) {\n  createNote(title: $title, body: $body, checklists: $checklists) {\n    id\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10ed9972a525d6a8901414eb505679df';

module.exports = node;
