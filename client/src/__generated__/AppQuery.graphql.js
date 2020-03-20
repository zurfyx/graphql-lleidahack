/**
 * @flow
 * @relayHash 3a9dcd037058a99a9a8c2a29bb6d9fd9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Note_note$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: Note_note$ref,
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  notes {
    id
    ...Note_note
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
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
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "notes",
        "storageKey": null,
        "args": null,
        "concreteType": "Note",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "notes",
        "storageKey": null,
        "args": null,
        "concreteType": "Note",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "checklists",
            "storageKey": null,
            "args": null,
            "concreteType": "Checklist",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  notes {\n    id\n    ...Note_note\n  }\n}\n\nfragment Note_note on Note {\n  id\n  title\n  body\n  checklists {\n    body\n    isChecked\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3aad916ff51a5e36693546bc919f3e61';

module.exports = node;
