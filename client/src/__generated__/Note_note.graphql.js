/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Note_note$ref: FragmentReference;
declare export opaque type Note_note$fragmentType: Note_note$ref;
export type Note_note = {|
  +id: ?string,
  +title: ?string,
  +body: ?string,
  +checklists: ?$ReadOnlyArray<?{|
    +body: ?string,
    +isChecked: ?boolean,
  |}>,
  +$refType: Note_note$ref,
|};
export type Note_note$data = Note_note;
export type Note_note$key = {
  +$data?: Note_note$data,
  +$fragmentRefs: Note_note$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Note_note",
  "type": "Note",
  "metadata": null,
  "argumentDefinitions": [],
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
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "checklists",
      "storageKey": null,
      "args": null,
      "concreteType": "Checklist",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ed09733e9695dec74fa6884ec26ecde7';

module.exports = node;
