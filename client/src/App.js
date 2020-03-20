import React from 'react';
import logo from './logo.svg';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'relay-hooks';
import Note from './Note'
import InputCard from './InputCard';

const query = graphql`
  query AppQuery {
    notes {
      id
      ...Note_note
    }
  }
`;

function App() {
  const response = useLazyLoadQuery(query, {});
  return (
    <div className="App">
      <InputCard/>
      <div className="grid">
        {response.props.notes.map(note => {
          console.info(note)
          return <div className="grid-item" key={note.id}><Note note={note}></Note></div>
        })}
        {Array(3 - response.props.notes.length % 3).fill(0).map((note, i) => {
          return <div key={i} className="grid-item"></div>
        })}
      </div>
    </div>
  );
}

export default App;
