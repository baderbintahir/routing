import React from 'react';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;