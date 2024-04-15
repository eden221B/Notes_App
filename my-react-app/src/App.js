import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import Header from "./components/Header";

const App = () =>{
  const [notes,setNotes] = useState([
    {
      id: nanoid(),
      text : "Sample Note",
      date: "13/04/2024",
    },

  ]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return <div className="container">
    <Header/>
    <NotesList 
    notes={notes} 
    handleAddNote={addNote}
    handleDeleteNote = {deleteNote}
    />

  </div>
};

export default App;