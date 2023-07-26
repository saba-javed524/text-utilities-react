import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

export default function Navbar(props) {
    // const [darkBlueSwitch, setdarkBlueSwitch] = useState(false);
    // const [darkGreenSwitch, setdarkGreenSwitch] = useState(false);

    // const toggleDarkBlueMode = () => {
    //     props.darkBlueToggleMode();
    //     setdarkBlueSwitch(true)
    // }

    //     else if (props.darkBlueMode === ' light' && props.darkGreenMode === 'dark') {
    //         props.darkBlueToggleMode();
    //         setdarkBlueSwitch(true)
    //         setdarkGreenSwitch(false)
    //     }
    //     else if (props.darkBlueMode === ' dark' && props.darkGreenMode === 'dark') {
    //         props.darkGreenToggleMode();
    //         setdarkBlueSwitch(false)
    //         setdarkGreenSwitch(true)
    //     }
    //     else if (props.darkBlueMode === ' dark' && props.darkGreenMode === 'light') {
    //         props.darkBlueToggleMode();
    //         setdarkBlueSwitch(false)
    //         setdarkGreenSwitch(false)
    //     }
    // }
    // const toggleDarkGreenMode = () => {
    //     props.darkGreenToggleMode();
    //     setdarkGreenSwitch(true)
    //     setdarkBlueSwitch(false)
    // }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.navbarMode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={() => { props.togglePalette('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-secondary rounded mx-2" onClick={() => { props.togglePalette('secondary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => { props.togglePalette('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => { props.togglePalette('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => { props.togglePalette('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    </div>
                    <div className={`form-check form-switch mx-3 text-${props.darkGreenMode === 'light' ? 'dark' : 'light'}`} >
                        <input checked={props.darkGreenSwitch} className="form-check-input" onClick={props.darkGreenToggleMode} type="checkbox" role="switch" id="greenSwitch" />
                        <label className="form-check-label" htmlFor="darkGreenMode" style={{ color: props.navbarMode === 'light' ? 'black' : 'white' }} >{props.darkGreenModeTitle}</label>
                    </div>

                    <div className={`form-check form-switch text-${props.darkBlueMode === 'light' ? 'dark' : 'light'}`} >
                        <input checked={props.darkBlueSwitch} className="form-check-input" onClick={props.darkBlueToggleMode} type="checkbox" role="switch" id="blueSwitch" />
                        <label className="form-check-label" htmlFor="darkMode" style={{ color: props.navbarMode === 'light' ? 'black' : 'white' }} >{props.darkBlueModeTitle}</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set your Title",
    aboutText: "Set your About Text"
}