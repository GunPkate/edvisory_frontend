import NoteList from "./components/NotesList"
import {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import axios from 'axios'

const App = () =>{
//   const [notes, setNotes] = useState([
//   {
//     id: nanoid() ,
//     text: 'note 1',
//     date: '15/01/2022'
//   },
//   {
//     id: nanoid() ,
//     text: 'note 2',
//     date: '15/01/2022'
//   },
// ]);
const [notes, setNotes] = useState([]);
useEffect(() => {
  const fetchData = async () =>{


      const {data: response} = await axios.get('http://localhost:5000/note_orm/getall');
      console.log(response.resultData)
      console.log(JSON.parse(JSON.stringify(response.resultData)))
      setNotes(response.resultData);

  }
  fetchData()
},[])
const addNote = (text) => {
  // alert(text);
  const date = new Date();
  const newNote ={
    id: nanoid(),
    title: title,
    text: text,
    date: date.toLocaleDateString()
  }

  const newNotes = [...notes,newNote]
  setNotes(newNotes)
  axios.post('http://localhost:5000/note_orm/create',newNote)
}

const deleteNote =(id) =>{
  const newNotes = notes.filter((note)=> note.id !== id)
  alert(id)
  setNotes(newNotes)
  axios.post('/note_orm/delete')
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