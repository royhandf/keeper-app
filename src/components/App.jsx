import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);

  const addNoteItem = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNoteItem} />
      {notes.map((noteItem, index) => (
        <Note
          key={uuidv4()}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
