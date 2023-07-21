import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text has been converted to UPPERCASE!", 'success')
        }
        else {
            props.showAlert("Please enter some value", 'warning')
        }
    }


    const handleLowClick = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Text has been converted to lowercase!", 'success')
        } else {
            props.showAlert("Please enter some value", 'warning')
        }

    }

    const handleSpacesClick = () => {
        if (text.length > 0) {
            let newText = text.split(/[ ]+/);
            newText = newText.join(" ");
            setText(newText);
            props.showAlert("Spaces has been removed from the text!", 'success')
        } else {
            props.showAlert("Please enter some value", 'warning')
        }
    }

    const handleTitleClick = () => {
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        if (newText.length > 0 && newText !== undefined && newText !== '' && newText !== ' ') {
            let words = newText.split(" ");
            let titleCaseArray = [];
            for (let i in words) {
                let newWord = words[i][0].toUpperCase();
                titleCaseArray.push(newWord + words[i].slice(1).toLowerCase());
            }
            let titleCase = titleCaseArray.join(' ');
            setText(titleCase);
            props.showAlert("Text has been converted to Titlecase!", 'success')
        } else {
            if (text.length == 0) {
                props.showAlert("Please enter some value", 'warning')
            }
            else if (text === undefined) {
                props.showAlert("Please enter a valid value", 'warning')
            }
            else if (text === '') {
                props.showAlert("Please enter a valid value", 'warning')
            }
            else if (text === ' ') {
                props.showAlert("Please enter a valid value", 'warning')
            }

        }
        // let newText = text.split(/[ ]+/);
        // newText = newText.join(" ");
        // if (newText === undefined || newText === '' || newText === ' ') {
        //     props.showAlert("Please enter some value", 'warning')
        //     newText = 'Please enter something like this';
        //     let words = newText.split(" ");
        //     let titleCaseArray = [];
        //     for (let i in words) {
        //         let newWord = words[i][0].toUpperCase();
        //         titleCaseArray.push(newWord + words[i].slice(1).toLowerCase());
        //     }
        //     let titleCase = titleCaseArray.join(' ');
        //     setText(titleCase);
        //     props.showAlert("Text has been converted to Titlecase!", 'success')

        // } else {
        //     let newText = text.split(/[ ]+/);
        //     newText = newText.join(" ");
        //     let words = newText.split(" ");
        //     let titleCaseArray = [];
        //     for (let i in words) {
        //         let newWord = words[i][0].toUpperCase();
        //         titleCaseArray.push(newWord + words[i].slice(1).toLowerCase());
        //     }
        //     let titleCase = titleCaseArray.join(' ');
        //     setText(titleCase);
        //     props.showAlert("Text has been converted to Titlecase!", 'success')

        // }

    }

    const handleClearClick = () => {
        if (text.length === 0) {
            props.showAlert("There is no text to clear", 'warning')
        } else {
            let newText = ("");
            setText(newText);
            props.showAlert("Text has been cleared!", 'success')
        }

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
