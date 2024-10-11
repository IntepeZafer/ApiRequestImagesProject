import React from 'react'
import './SearchHeaderStyle.css'

const SearchHeader = ({search}) => {
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search("Zafer İntepe")
    }

  return (
    <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default SearchHeader
