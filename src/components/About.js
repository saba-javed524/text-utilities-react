
export default function About(props) {
    return (
        <div className="container" >
            <div className="accordion" id="accordionExample">
                <h1 className='my-3' style={{ color: props.textColor }}>About Us</h1>
                <div className="accordion-item" style={{ color: props.textColor, backgroundColor: 'transparent' }}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={{ backgroundColor: "transparent", border: props.buttonBorder }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong style={{ color: props.textColor }}>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.textColor, backgroundColor: 'transparent' }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: "transparent", border: props.buttonBorder }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong style={{ color: props.textColor }}>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: 'transparent' }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: "transparent", color: props.textColor, border: props.buttonBorder }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong style={{ color: props.textColor }}>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
