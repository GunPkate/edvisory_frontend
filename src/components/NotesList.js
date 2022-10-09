import Note from "./Note"
import AddNote from "./AddNote"

const NoteList =({notes, handleAddNote, handleDeleteNote}) =>{
    return(
        <div className="notes-list">
            {notes.map((note)=> 
                <Note
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote = {handleDeleteNote}
                />
            )}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NoteList