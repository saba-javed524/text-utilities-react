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
  const [textAreaBackgroundColor, settextAreaBackgroundColor] = useState('white')
  const [textColor, settextColor] = useState('black')
  const [buttonColor, setbuttonColor] = useState('blue')
  const [buttonTextColor, setbuttonTextColor] = useState('white')
  const [buttonBorder, setbuttonBorder] = useState('0px solid blue')
  const [alert, setAlert] = useState(null)
  const [darkBlueSwitch, setdarkBlueSwitch] = useState(false);
  const [darkGreenSwitch, setdarkGreenSwitch] = useState(false);


  const darkBlueToggleMode = () => {
    if (darkBlueMode === "light" && darkGreenMode === 'light') {
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
    if (darkGreenMode === "light" && darkBlueMode === 'light') {
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
      setdarkBlueSwitch(false)
      setdarkGreenSwitch(false)
      setDarkBlueMode("light")
      setdarkGreenMode('light')
      settextAreaBackgroundColor('white')
      setDarkBlueModeTitle("Switch to Dark Green Mode")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been set', 'success')
      setbuttonColor('blue')
      setbuttonTextColor('white')
      setnavbarMode('light')
      settextColor('black')
      setbuttonBorder('2px solid black')
    }
    // else {
    //   setDarkBlueMode("light")
    //   settextAreaBackgroundColor('white')
    //   setDarkBlueModeTitle("Switch to Dark Blue Mode")
    //   document.body.style.backgroundColor = 'white'
    //   showAlert('Light Mode has been set', 'success')
    //   setbuttonColor('blue')
    //   setbuttonTextColor('white')
    //   setnavbarMode('light')
    //   settextColor('black')
    //   setbuttonBorder('2px solid black')
    // }
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
      <Navbar darkBlueSwitch={darkBlueSwitch} darkGreenSwitch={darkGreenSwitch} title="Text Utilities" aboutText="About Text Utils" navbarMode={navbarMode} darkBlueToggleMode={darkBlueToggleMode} darkBlueModeTitle={darkBlueModeTitle} darkGreenToggleMode={darkGreenToggleMode} darkGreenMode={darkGreenMode} darkGreenModeTitle={darkGreenModeTitle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm textColor={textColor} textAreaBackgroundColor={textAreaBackgroundColor} buttonColor={buttonColor} buttonTextColor={buttonTextColor} buttonBorder={buttonBorder} heading="Text Utils - Word Counter, Character Counter, Title Case" darkBlueMode={darkBlueMode} showAlert={showAlert} />
          }></Route>
          <Route path="/about" element={<About darkBlueMode={darkBlueMode} darkGreenMode={darkGreenMode} buttonBorder={buttonBorder} textColor={textColor} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
