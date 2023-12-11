// Header.js

import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <div id="buttonid">
        <a  href="About.js"><p>About</p></a>
       <a href="Projects.js"> <p>Projects</p></a>
       <a href="Contact.js"><p>Contact</p></a>
      </div>
      <h1>Rakesh Mehta</h1>
      <p>Web Developer and Data Science Enthusiast!!!</p>
    </header>
  );
}

export default Header;
