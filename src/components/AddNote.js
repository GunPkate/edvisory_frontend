import {useState} from 'react'

const AddNote = ({handleAddNote}) =>{
    const [noteText, setNoteText] = useState('')
    const textLimit = 200;
    const handleChange = (event) =>{if(textLimit - event.target.value.length >=0){
            setNoteText(event.target.value)
        }
    }
    const handleSaveClick = () => {noteText.trim().length?handleAddNote(noteText):alert('Empty text')}

    return (
    <div className="note new">
        <textarea onChange={handleChange} rows="8" cols="10" placeholder="Type to add a note ..."></textarea>
        <small>{textLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>save</button>
    </div>
    )
}

export default AddNote