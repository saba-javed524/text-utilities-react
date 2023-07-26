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
  const [darkBlueMode, setDarkBlueMode] = useState("light")
  const [darkBlueModeTitle, setDarkBlueModeTitle] = useState("Switch to Dark BlueMode")
  const [darkGreenModeTitle, setdarkGreenModeTitle] = useState("Switch to Dark Green Mode")
  const [darkGreenMode, setdarkGreenMode] = useState('light')
  const [textAreaTextColor, settextAreaTextColor] = useState('black')
  const [textAreaBackgroundColor, settextAreaBackgroundColor] = useState('white')
  const [textColor, settextColor] = useState('black')
  const [buttonColor, setbuttonColor] = useState('blue')
  const [buttonTextColor, setbuttonTextColor] = useState('white')
  const [buttonBorder, setbuttonBorder] = useState('0px solid blue')
  const [alert, setAlert] = useState(null)
  const [darkBlueSwitch, setdarkBlueSwitch] = useState(false);
  const [darkGreenSwitch, setdarkGreenSwitch] = useState(false);

  const removeClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  const togglePalette = (cls) => {
    removeClasses();
    setdarkBlueSwitch(false)
    setdarkGreenSwitch(false)
    setdarkGreenMode('light')
    setDarkBlueMode('light')
    settextAreaBackgroundColor('white')
    settextColor('white')
    console.log(cls);
    document.body.classList.add('bg-' + cls);
  }

  const darkBlueToggleMode = () => {
    removeClasses();
    console.log('REMOVED')
    if (darkBlueMode === "light" && darkGreenMode === 'light') {
      settextAreaTextColor('white')
      setdarkBlueSwitch(true)
      setDarkBlueMode('dark')
      setDarkBlueModeTitle("Switch to Light Mode")
      document.body.style.backgroundColor = '#042743'
      settextAreaBackgroundColor('#a7b4bd')
      showAlert('Dark Blue Mode has been set', 'success')
      setnavbarMode('dark')
      settextColor('white')
      setbuttonColor('white')
      setbuttonTextColor('blue')
      setbuttonBorder('2px solid white')
    }
    else if (darkBlueMode === "light" && darkGreenMode === 'dark') {
      settextAreaTextColor('white')
      setDarkBlueMode('dark')
      setdarkGreenMode('light')
      setdarkBlueSwitch(true)
      setdarkGreenSwitch(false)
      setDarkBlueModeTitle("Switch to Light Mode")
      setdarkGreenModeTitle('Switch to Dark Green Mode')
      document.body.style.backgroundColor = '#042743'
      settextAreaBackgroundColor('#a7b4bd')
      showAlert('Dark Blue Mode has been set', 'success')
      setnavbarMode('dark')
      settextColor('white')
      setbuttonColor('white')
      setbuttonTextColor('blue')
      setbuttonBorder('2px solid white')
    }
    else if (darkBlueMode === "dark" && darkGreenMode === 'light') {
      settextAreaTextColor('black')
      setdarkBlueSwitch(false)
      setdarkGreenSwitch(false)
      setDarkBlueMode("light")
      settextAreaBackgroundColor('white')
      setDarkBlueModeTitle("Switch to Dark Blue Mode")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been set', 'success')
      setbuttonColor('blue')
      setbuttonTextColor('white')
      setnavbarMode('light')
      settextColor('black')
      setbuttonBorder('2px solid black')
    }
  }
  const darkGreenToggleMode = () => {
    removeClasses();
    if (darkGreenMode === "light" && darkBlueMode === 'light') {
      settextAreaTextColor('white')
      setdarkGreenSwitch(true)
      setdarkGreenMode('dark')
      setdarkGreenModeTitle("Switch to Light Mode")
      document.body.style.backgroundColor = '#143027'
      settextAreaBackgroundColor('#28604e')
      showAlert('Dark Green Mode has been set', 'success')
      setnavbarMode('dark')
      settextColor('white')
      setbuttonColor('white')
      setbuttonTextColor('#143027')
      setbuttonBorder('2px solid white')
    }
    else if (darkGreenMode === "light" && darkBlueMode === 'dark') {
      settextAreaTextColor('white')
      setdarkGreenMode('dark')
      setDarkBlueMode('light')
      setdarkGreenSwitch(true)
      setdarkBlueSwitch(false)
      setdarkGreenModeTitle("Switch to Light Mode")
      setDarkBlueModeTitle('Switch to Dark Blue Mode')
      document.body.style.backgroundColor = '#143027'
      settextAreaBackgroundColor('#28604e')
      showAlert('Dark Green Mode has been set', 'success')
      setnavbarMode('dark')
      settextColor('white')
      setbuttonColor('white')
      setbuttonTextColor('blue')
      setbuttonBorder('2px solid white')
    }
    else if (darkGreenMode === "dark" && darkBlueMode === 'light') {
      settextAreaTextColor('black')
      setdarkBlueSwitch(false)
      setdarkGreenSwitch(false)
      setDarkBlueMode("light")
      setdarkGreenMode('light')
      settextAreaBackgroundColor('white')
      setdarkGreenModeTitle("Switch to Dark Green Mode")
      setDarkBlueModeTitle("Switch to Dark Blue Mode")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been set', 'success')
      setbuttonColor('blue')
      setbuttonTextColor('white')
      setnavbarMode('light')
      settextColor('white')
      setbuttonBorder('2px solid black')
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
      <Navbar togglePalette={togglePalette} darkBlueSwitch={darkBlueSwitch} darkGreenSwitch={darkGreenSwitch} title="Text Utilities" aboutText="About Text Utils" navbarMode={navbarMode} darkBlueToggleMode={darkBlueToggleMode} darkBlueModeTitle={darkBlueModeTitle} darkGreenToggleMode={darkGreenToggleMode} darkGreenMode={darkGreenMode} darkGreenModeTitle={darkGreenModeTitle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm textAreaTextColor={textAreaTextColor} textColor={textColor} textAreaBackgroundColor={textAreaBackgroundColor} buttonColor={buttonColor} buttonTextColor={buttonTextColor} buttonBorder={buttonBorder} heading="Text Utils - Word Counter, Character Counter, Title Case" darkBlueMode={darkBlueMode} showAlert={showAlert} />
          }></Route>
          <Route path="/about" element={<About darkBlueMode={darkBlueMode} darkGreenMode={darkGreenMode} buttonBorder={buttonBorder} textColor={textColor} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
