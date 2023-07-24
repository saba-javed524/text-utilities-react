
export default function About(props) {
    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white',
    //     }
    // );
    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const [btnClass, setBtnClass] = useState("btn btn-dark");

    // let toggleMode = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle
    //             ({
    //                 color: 'black',
    //                 backgroundColor: 'white',

    //             })
    //         setBtnText("Enable Dark Mode")
    //         setBtnClass("btn btn-dark")
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //         setBtnClass("btn btn-light")
    //     }

    // }
    let border = props.mode === 'light' || props.darkGreenMode === 'light' ? '1px solid' : '1px solid';
    let borderColor = props.mode === 'light' || props.darkGreenMode === 'light' ? 'white' : 'black';

    return (
        <div className="container" >
            <div className="accordion" id="accordionExample">
                <h1 className='my-3' style={{ color: props.textColor }}>About Us</h1>
                <div className="accordion-item" style={{ color: props.textColor, backgroundColor: 'transparent' }}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={{ backgroundColor: "transparent", color: props.textColor, border: border, borderColor: borderColor }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Textutils</strong>  gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.textColor, backgroundColor: 'transparent' }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: "transparent", color: props.textColor, border: border, borderColor: borderColor }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils </strong>is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.textColor, backgroundColor: 'transparent' }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: "transparent", color: props.textColor, border: border, borderColor: borderColor }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils </strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
