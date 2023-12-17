// Header.js

import React from 'react';
import './header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div id="buttonid">
        <button onClick={() => scrollToSection('about')}><p>About</p></button>
        <button onClick={() => scrollToSection('projects')}><p>Projects</p></button>
        <button onClick={() => scrollToSection('contact')}><p>Contact</p></button>
      </div>
      <h1>Rakesh Mehta</h1>
      <p>Web Developer and Data Science Enthusiast!!!</p>
    </header>
  );
}

export default Header;
