import React from 'react';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Chatbot /> {/* Embed the Chatbot here */}
      <Contact />
    </div>
  );
}

export default App;
