import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ':';
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.alertType)} </strong>{props.alert.alertMessage}
        </div>
    )
}