import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.navbarMode}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch mx-3 text-${props.darkGreenMode === 'light' ? 'dark' : 'light'}`} >
                        <input className="form-check-input" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'green' }} onClick={props.toggleDarkGreenMode} type="checkbox" role="switch" id="darkGreenMode" />
                        <label className="form-check-label" htmlFor="darkGreenMode" style={{ color: props.navbarMode === 'light' ? 'black' : 'white' }} >{props.darkGreenModeTitle}</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                        <input className="form-check-input" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'blue' }} onClick={props.toggleMode} type="checkbox" role="switch" id="darkMode" />
                        <label className="form-check-label" htmlFor="darkMode" style={{ color: props.navbarMode === 'light' ? 'black' : 'white' }} >{props.switchTitle}</label>
                    </div>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
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