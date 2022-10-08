import {useState} from 'react'

const AddNote = ({handleAddNote}) =>{
    const [noteText, setNoteText] = useState('')
    const handleChange = (event) =>{setNoteText(event.target.value)}
    const handleSaveClick = () => {handleAddNote(noteText)}

    return (
    <div className="note new">
        <textarea onChange={handleChange} rows="8" cols="10" placeholder="Type to add a note ..."></textarea>
        <small>200 remaining</small>
        <button className="save" onClick={handleSaveClick}>save</button>
    </div>
    )
}

export default AddNote