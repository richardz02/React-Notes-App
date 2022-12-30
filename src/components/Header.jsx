import React from 'react'

const Header = ({ handleToggle }) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button 
            className='button'
            onClick={() => handleToggle(prev => !prev)}
        >
            Toggle Mode
        </button>
    </div>
  )
}

export default Header
