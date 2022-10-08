const AddNote = () =>{
    
    return (
    <div className="note new">
        <textarea rows="8" cols="10" placeholder="Type to add a note ..."></textarea>
        <small>200 remaining</small>
        <button className="save">save</button>
    </div>
    )
}

export default AddNote