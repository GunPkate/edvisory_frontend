const Note = ({id, text, date, handleDeleteNote})=>{
    return <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <button className='delete-icon' size="1.3em" onClick={() => handleDeleteNote(id)}>Delete</button> 
        </div>   
    </div>
}

export default Note