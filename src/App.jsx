import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import NotesList from './components/NotesList'
import Searchbar from './components/Searchbar'
import Header from './components/Header'

function App() {

  const [notes, setNotes] = useState([])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    )
  }, [notes])

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    )
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggle={setDarkMode} />
        <Searchbar handleSearch={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )

}

export default App
