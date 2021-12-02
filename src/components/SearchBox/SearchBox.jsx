import React from 'react';
import './SearchBox.css';


const SearchBox = ({handleInputchange}) => {
    return(
        <div className="search-container">
            <input onChange= {(event) => handleInputchange(event.target.value)} placeholder="Type keywords" className="search-input" />
        </div>
    )
}

export default SearchBox;