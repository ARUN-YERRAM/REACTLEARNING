import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=> {
        // console.log("Uppercase was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=> {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value)
    }

    // setText("khfkshgs");
    const [text, setText] = useState('');
    return (
    <>
        <div className="container">
            <h1> {props.heading} - {text} </h1>
            <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>

        </div>
        <div className="container my-4">
            <h1> Yout text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length }  Minutes read</p>
            <h2> Preview</h2>
            <p> {text} </p>

        </div>
    </>

    )
}
