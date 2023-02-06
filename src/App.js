import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);

  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been Enabled","success");
    }
    else{
      setMode('light')
      showAlert("Light mode has been Enabled","success");
    }
  }
  return (
   <>
   <Router>
   <Navbar title="TextChanger" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} />
   <div className="container">
      <Routes>
          <Route path="/about"
          element={<About />}/>
          <Route path="/"
          element={<Textbox showAlert={showAlert} heading = "Enter the text to analyze"/>}/>  
      </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
