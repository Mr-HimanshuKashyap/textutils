import React, {useState} from 'react'

export default function Textbox(props) {

    const UpperCase =()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case","success")
        document.title = 'TextChanger- UpperCase'
    }
    const ClearCase =()=>{
        setText('')
        props.showAlert("Text Cleared","success")
        document.title = 'TextChanger- Cleared'
    }
    const CopyCase =()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied","success")
    }
    const LowerCase =()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lower Case","success")
        document.title = 'TextChanger- LowerCase'
    }
    const HandleChange =(event)=>{
        setText(event.target.value)
    }

const [text, setText] = useState("")
  return (
    <div> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={HandleChange} placeholder="Enter the Text"id="myBox" rows="10"></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={UpperCase}>Upper Case</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={LowerCase}>Lower Case</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={ClearCase}>Clear Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={CopyCase}>Copy Text</button>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).length-1} words and {text.length} characters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
  )
} 
