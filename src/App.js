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

  return (
    <div className="container" >
      <NoteList notes = {notes}/>
    </div>
  )
}
export default App