import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Title from "./Title";
// import notes from "../notes" // similar to getting a response from rest api or database

function App() {
  const [notes, setNotes] = useState([]); // creataing a note Hook

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; //using the spread operator to have all the previous note
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Title />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        // iterating through the notes list
        return (
          <Note
            key={index}
            id={index} // not recommended but for this project we are using it. we can use a package for this
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
