const Note = ({id, text, date, title, handleDeleteNote})=>{
    return <div className="note">
        <span className="title">{title}</span>
        <span style={{transform:"translateY(-40px)"}}>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <button className='delete-icon' size="1.3em" onClick={() => handleDeleteNote(id)}>Delete</button> 
        </div>   
    </div>
}

export default Note