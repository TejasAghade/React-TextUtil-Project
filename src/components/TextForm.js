import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("Uppercase Clicked");
        let newText = text.toUpperCase()

        setText(newText)
        props.showAlert( "Converted to Upper Case", "success" )
        
    }

    const handleLowClick = () =>{
        console.log("Lowercase Clicked");
        let newText = text.toLowerCase()
        
        setText(newText)
        props.showAlert( "Converted to Lower Case", "success" )
    }

    const handleClearClick = () =>{
        console.log("Clear Text Clicked");
        let newText = ""
        setText(newText)
        props.showAlert( "Text Cleared", "success" )

    }


    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }

    // text -> variable, -- setText--> a function to change text

    const [text, setText] = useState("")

  return (
      <>
    <div className='container'>
        <h1>{props.heading}</h1>

        <div className="mb-3">
            <textarea className="form-control" value={text} onChange ={handleOnChange} id="myBox" rows="8"></textarea>
            
        </div>

        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Conver To Uppercase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Conver To Lowercase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3">

        <h1>Your Text Summery</h1>

        <p>{ text.split(" ").length } Words and {text.length} Characters</p>
        <p> {0.008 *  text.split(" ").length} Minutes to read </p>
        
        <h3>preview</h3>
        <p >{text.length>0?text:"Enter text to preview"}</p>
        <p></p>
        
    </div>
    </>
  )
}

