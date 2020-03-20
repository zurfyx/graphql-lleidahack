import React from 'react'
import './Note.css'
import { useFragment, useMutation, graphql } from 'relay-hooks';

function Note({note: noteKey}) {
  const {id, title, body, checklists} = useFragment(
    graphql`
      fragment Note_note on Note {
        id
        title
        body
        checklists {
          body
          isChecked
        }
      }
    `,
    noteKey
  )

  const [markAsComplete] = useMutation(graphql`
      mutation NoteChecklistItemToggleCompleteMutation($id: ID!, $checklistBodies: [String!]!) {
        toggleComplete(id: $id, checklistBodies: $checklistBodies) {
          ...Note_note
        }
      }
  `);

  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{body}</p>
      {(checklists || []).map((checklist, i) => {
        return <div key={i}>
          <label className={`${checklist.isChecked ? 'strike' : ''}`}>
            <input type="checkbox" checked={checklist.isChecked ? true : false} onChange={e => {
              markAsComplete({variables: {
                id,
                checklistBodies: [checklist.body]
              }});
            }} />
            {checklist.body}
          </label>
        </div>
      })}
    </div>
  )
}

export default Note
