import React from 'react';
import './UserOutput.css';

// Ouput the user details
const userOutput = (props) => {
    let extraMessage;
    if (props.usernameOld) {
        extraMessage = ' (Changed from ' + props.usernameOld + ')';
    }
    return (
        <div className="message">
            <p>Your username is <span className="username">{props.username}</span>!<br/>{extraMessage}</p>
        </div>
    );
};

export default userOutput;