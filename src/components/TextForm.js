import React, { useState } from 'react'


export default function TextForm(props) {
    // let wordsCount = 0;
    // const countWords = (text) => {
    //     if (text.length > 0) {
    //         let newText = text.split(" ");
    //         for (let i in newText) {
    //             console.log(newText[i])
    //             if (newText[i] !== '') {
    //                 wordsCount++;
    //             }
    //         }
    //         return wordsCount;
    //     }
    // }

    const handleUpClick = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text has been converted to UPPERCASE!", 'success')
        }
    }


    const handleLowClick = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Text has been converted to lowercase!", 'success')
        }
    }

    const handleSpacesClick = () => {
        if (text.length > 0) {
            let newText = text.split(/[ ]+/);
            newText = newText.join(" ");
            setText(newText);
            props.showAlert("Spaces has been removed from the text!", 'success')
        }
    }

    const handleTitleClick = () => {
        let newText = text.split(/[ ]+/).filter((element) => { return element !== ''; });
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

            if (text === undefined) {
                props.showAlert("Please enter a valid value", 'warning')
            }
            else if (text === '') {
                props.showAlert("Please enter a valid value", 'warning')
            }
            else if (text === ' ') {
                props.showAlert("Please enter a valid value", 'warning')
            }

        }
    }

    const handleCopyText = () => {
        let newText = document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clip board!", 'success')
    }

    const handleClearClick = () => {
        if (text.length !== 0) {
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
                    <h2 style={{ color: props.textColor }}>{props.heading}</h2>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text} style={{ color: props.textAreaTextColor, backgroundColor: props.textAreaBackgroundColor }}></textarea>
                    <button disabled={text.length === 0} style={{ backgroundColor: props.buttonColor, color: props.buttonTextColor, border: props.buttonBorder }} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button disabled={text.length === 0} style={{ backgroundColor: props.buttonColor, color: props.buttonTextColor }} className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                    <button disabled={text.length === 0} style={{ backgroundColor: props.buttonColor, color: props.buttonTextColor }} className="btn btn-primary my-2 mx-2" onClick={handleTitleClick}>Convert to Title Case</button>
                    <button disabled={text.length === 0} style={{ backgroundColor: props.buttonColor, color: props.buttonTextColor }} className="btn btn-primary my-2 mx-2" onClick={handleSpacesClick}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} style={{ backgroundColor: props.buttonColor, color: props.buttonTextColor }} className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy Text</button>
                    <button disabled={text.length === 0} style={{ backgroundColor: props.buttonColor, color: props.buttonTextColor }} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
                </div>
                <div className="container" style={{ color: props.textColor }}>
                    <h3>Text Summary:</h3>
                    <p>{text.split(" ").filter((element) => { return element !== '' }).length} words and {text.length} characters</p>
                    <h3>Text Preview:</h3>
                    <p>{text.length !== 0 ? text : "Nothing to preview :("}</p>
                    <h5>{0.008 * text.split(" ").filter((element) => { return element !== '' }).length} minutes read</h5>
                </div>
            </div >
        </>
    )
}
