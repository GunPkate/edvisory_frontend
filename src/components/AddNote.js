import {useState} from 'react'

const AddNote = ({handleAddNote}) =>{
    let [noteText, setNoteText] = useState('')
    let [noteTitle, setNoteTitle] = useState('')
    const textLimitTxt = 200;
    const textLimitTitle = 200;
    const ngwords = ["shit", "fuck", "bad","piece of shit"];

    const handleChangeTxt = (event) =>{if(textLimitTxt - event.target.value.length >=0){
            setNoteText(event.target.value)
        }
    }
    const handleChangeTitle = (event) =>{if(textLimitTitle - event.target.value.length >=0){
            setNoteTitle(event.target.value)
        }
    }
    const handleSaveClick = () => {
        for (let i of ngwords){
            let word = i.length
            let cen = ''
            for(let y=0; y <word;y++){cen += '*'}
            noteText = noteText.replace(i,i?cen:i)
            noteTitle = noteTitle.replace(i,i?cen:i)
        }
        noteText.trim().length?handleAddNote(noteText):alert('Empty text')
        noteTitle.trim().length?handleAddNote(noteTitle):alert('Empty title')
    }
    
    return (
    <div className="note new">
        <textarea onChange={handleChangeTitle} rows="3" cols="10" placeholder="Type to add Title ..." className='title'></textarea>
        <textarea onChange={handleChangeTxt} rows="8" cols="10" placeholder="Type to add a note ..."></textarea>
        <small>{textLimitTxt - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>save</button>
    </div>
    )
}

export default AddNote