import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
    }

    const showAlert = () => {
        alert("Please enter something");

    }

    const handleTitleClick = () => {
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        if (newText === undefined || newText === '' || newText === ' ') {
            showAlert();
            newText = 'Please enter something like this';
            let words = newText.split(" ");
            let titleCaseArray = [];
            for (let i in words) {
                let newWord = words[i][0].toUpperCase();
                titleCaseArray.push(newWord + words[i].slice(1).toLowerCase());
            }
            let titleCase = titleCaseArray.join(' ');
            setText(titleCase);
        } else {
            console.log(newText);
            let words = newText.split(" ");
            let titleCaseArray = [];
            for (let i in words) {
                let newWord = words[i][0].toUpperCase();
                titleCaseArray.push(newWord + words[i].slice(1).toLowerCase());
            }
            let titleCase = titleCaseArray.join(' ');
            setText(titleCase);
        }

    }

    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <div className="mb-3" >
                    <h2 style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{props.heading}</h2>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text} style={{ color: props.mode === 'light' ? '#042743' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#042743' }}></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleTitleClick}>Convert to Title Case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleSpacesClick}>Remove Extra Spaces</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                </div>
                <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                    <h3>Text Summary:</h3>
                    <p>{text === '' ? 0 : text.split(" ").length} words and {text.length} characters</p>
                    <h3>Text Preview:</h3>
                    <p>{text.length !== 0 ? text : "Please enter a text to preview!"}</p>
                    <h5>{text === "" ? "0" : 0.008 * text.split(" ").length} minutes read</h5>
                </div>
            </div >
        </>
    )
}
