import PropTypes from 'prop-types'

import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props) {

  const modeChanging = () =>{
    props.toggleMode();
    props.changeMode();
  }
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"> {props.title} </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about"> {props.about} </Link>
          </li>
         

        </ul>
       
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} `}>
          <input className="form-check-input" type="checkbox" onClick={modeChanging} role="switch" id="flexSwitchCheckChecked" />
          <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label >
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}



// setting type of proptype

// .isRequired
Navbar.propTypes = {

    title: PropTypes.string.isRequired ,
    about: PropTypes.string
}

//set default props if not pass

// Navbar.defaultProps = {
//   title : "title here",
//   about : "about here"
// }



