import React, {useState} from 'react';
import { useMutation } from 'relay-hooks';
import graphql from 'relay-hooks';

const mutation = graphql`
  mutation InputCardCreateNoteMutation($title: String!, $body: String, $checklists: [ChecklistInput]) {
   createNote(title: $title,
    body: $body,
    checklists: $checklists
    ) {
      id
      title
    }
  }
`;

function InputCard() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [mutate, {loading}] = useMutation(mutation);

  async function handleSubmit() {
    mutate({
      variables: {
        title,
        body,
      },
      updater: x => {
        console.info(x)


      },
    });
  }

  return <div className="note">
    <div><input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.value)} /></div>
    <div><input type="text" placeholder="Body" value={body} onChange={e => setBody(e.value)} /></div>
    <div><button onClick={handleSubmit}>Save</button></div>
  </div>
}

export default InputCard;