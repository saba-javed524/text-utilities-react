import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light")
  const [switchTitle, setswitchTitle] = useState("Switch to Dark Mode")
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      setswitchTitle("Switch to Light Mode")
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been set', 'success')
    }
    else {
      setMode("light")
      setswitchTitle("Switch to Dark Mode")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been set', 'success')
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
      <Navbar title="Text Utilities" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} switchTitle={switchTitle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze:" mode={mode} showAlert={showAlert} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
