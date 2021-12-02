import React from 'react';
import './NameCard.css';

const nameChaepUrl = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B'

const NameCard = ({suggestedName}) =>{
    return (
       <a target = "blank" rel="noferrer" className="card-link"  href={`${nameChaepUrl}${suggestedName}`}> 
          <div className="result-name-card">
              <p className="result-name">{suggestedName}</p>
          </div>
        </a>
    )
}

export default NameCard; 
