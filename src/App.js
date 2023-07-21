import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light")
  const [switchTitle, setswitchTitle] = useState("Switch to Dark Mode")

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      setswitchTitle("Switch to Light Mode")
      document.body.style.backgroundColor = '#042743'
    }
    else {
      setMode("light")
      setswitchTitle("Switch to Dark Mode")
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>

      <Navbar title="Text Utilities" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} switchTitle={switchTitle} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze:" mode={mode} />
      </div>
      {/* <About /> */}

    </>
  );
}

export default App;
