import React from 'react';
import './Header.css';


const Header = ({headTitle,headerExpanded}) => {
    return (
        <div className="head-container">
            <img 
            src="./images/header.png"
            className={`head-image ${
                headerExpanded
                ? 'head-image-expanded'
                : 'head-image-contracted'
            }`} alt="headerImage"/>
            <h1 className={`head-text ${
                headerExpanded
                ? 'head-text-contracted'
                : 'head-text-expanded'
            }`}>{headTitle}</h1>
             
        </div>
    );
};

export default Header;
