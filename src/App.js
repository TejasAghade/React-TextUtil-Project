// import logo from './logo.svg';
import './App.css';
import About from './components/About.js';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, {useState} from 'react'
import Alert from './components/Alert';

// importing react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";







function App() {


//state for dark mode
const [mode, setMode] = useState('light');

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';

      showAlert("Dark Mode Enabled", "success")
      
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    
      showAlert("Light Mode Enabled", "success")


    }

  }



  // state for alert

  const [alert, setAlert] = useState(null)

// creating a function to set alert
  const showAlert = (message, type) =>{
      setAlert({
        message : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1800);
  }








// state for button text

const [btnTxt, setBtnTxt] = useState("Enable")

const changeMode = ()=>{

    if(mode === 'dark'){

      setBtnTxt("Enable")
    }else{

      setBtnTxt("Disable")
    }


}





  return (

    // routing means navigating to pages
    <>
     <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} changeMode={changeMode} btnTxt={btnTxt} toggleMode= {toggleMode}/>
     

        <Alert Alert={alert} />

        <div className="container my-3">
       
        <Routes>

          <Route exact path='/' element={ <TextForm  heading= "Enter the Text to Analyze" mode={mode} showAlert={showAlert} />} />


          <Route exact path='/about' element={<About mode={mode} />} />

        </Routes>

        </div>
     </Router>
    
      </>

    
  );
}

export default App;
