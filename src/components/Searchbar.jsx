import React from 'react'
import { MdSearch } from 'react-icons/md'

const Searchbar = ({ handleSearch }) => {
  return (
    <div className='search-bar'>
      <MdSearch className='search-icon' size='1.3em' /> 
      <input 
        type='text' 
        placeholder='type to search...'
        onChange={(event) => 
          handleSearch(event.target.value)
        }
      />
    </div>
  )
}

export default Searchbar
