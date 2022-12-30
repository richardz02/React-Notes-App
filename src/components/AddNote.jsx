import React, { useState } from 'react'

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('')

    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }

    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }

  return (
    <div className='note new'>
      <textarea 
        cols="10" 
        rows="8" 
        placeholder='Type to add note...'
        value={noteText}
        onChange={handleChange}
        >
        </textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length} characters remaining</small>
            <button className="button" onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default AddNote
