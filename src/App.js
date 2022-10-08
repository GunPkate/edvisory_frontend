import NoteList from "./components/NotesList"
import {useState} from 'react'
import {nanoid} from 'nanoid'

const App = () =>{
  const [notes, setNotes] = useState([
  {
    id: nanoid() ,
    text: 'note 1',
    date: '15/01/2022'
  },
  {
    id: nanoid() ,
    text: 'note 2',
    date: '15/01/2022'
  },
]);

const addNote = (text) => {
  // alert(text);
  const date = new Date();
  const newNote ={
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }

  const newNotes = [...notes,newNote]
  setNotes(newNotes)
}

const deleteNote =(id) =>{
  const newNotes = notes.filter((note)=> note.id !== id)
  setNotes(newNotes)
}

  return (
    <div className="container" >
      <NoteList
        notes = {notes}
        handleAddNote = {addNote}
        handleDeleteNote = {deleteNote}  
      />
    </div>
  )
}
export default App