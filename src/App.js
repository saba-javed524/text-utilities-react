import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [navbarMode, setnavbarMode] = useState('light')
  const [mode, setMode] = useState("light")
  const [textColor, settextColor] = useState('black')
  const [darkGreenMode, setdarkGreenMode] = useState('light')
  const [buttonColor, setbuttonColor] = useState('blue')
  const [buttonTextColor, setbuttonTextColor] = useState('white')
  const [buttonBorder, setbuttonBorder] = useState('0px solid blue')
  const [darkGreenModeTitle, setdarkGreenModeTitle] = useState("Switch to Dark Green Mode")
  const [switchTitle, setswitchTitle] = useState("Switch to Dark Mode")
  const [alert, setAlert] = useState(null)

  const toggleDarkGreenMode = () => {
    if (darkGreenMode === 'light') {
      setdarkGreenMode('dark')
      // setInterval(() => {
      //   document.title = "Alert";
      // }, 2000);
      setdarkGreenModeTitle("Switch to Light Mode")
      document.body.style.backgroundColor = '#143027'
      showAlert('Dark Green Mode has been set', 'success')
      setbuttonColor('white')
      setbuttonTextColor('#143027')
      setbuttonBorder('2px solid white')
      setnavbarMode('dark')
      settextColor('white')
    } else {
      setdarkGreenMode("light")
      setdarkGreenModeTitle("Switch to Dark Green Mode")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been set', 'success')
      setbuttonColor('blue')
      setbuttonTextColor('white')
      setbuttonBorder('0px solid white')
      setnavbarMode('light')
      settextColor('black')
    }
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      setswitchTitle("Switch to Light Mode")
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been set', 'success')
      setbuttonColor('white')
      setbuttonTextColor('blue')
      setnavbarMode('dark')
      settextColor('white')
    }
    else {
      setMode("light")
      setswitchTitle("Switch to Dark Mode")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been set', 'success')
      setbuttonColor('blue')
      setbuttonTextColor('white')
      setnavbarMode('light')
      settextColor('black')
    }
  }

  const showAlert = (alertMessage, alertType) => {
    setAlert({
      alertMessage: alertMessage,
      alertType: alertType
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  return (
    <>
      <Navbar title="Text Utilities" aboutText="About Text Utils" navbarMode={navbarMode} toggleMode={toggleMode} switchTitle={switchTitle} toggleDarkGreenMode={toggleDarkGreenMode} darkGreenModeTitle={darkGreenModeTitle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm textColor={textColor} buttonColor={buttonColor} buttonTextColor={buttonTextColor} buttonBorder={buttonBorder} heading="Text Utils - Word Counter, Character Counter, Title Case" mode={mode} showAlert={showAlert} />
          }></Route>
          <Route path="/about" element={<About mode={mode} darkGreenMode={darkGreenMode} textColor={textColor} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;