import React from 'react';
import './UserInput.css';

// Create input for editing user details
const userInput = (props) => {
    const inputId = 'input_'+Math.random().toString(36).substring(2);
    const style = {
      padding: '0.5rem 0.75rem',  
      border: 'none',
      border: '2px solid #26499c',
      borderRadius: '3px',
      width: '100%',
      fontSize: '1rem'
    };
    return (   
        <div>
            <form className="user-form">
                <label className="user-form__label" htmlFor={inputId}>
                    Update your username:
                </label>
                <input style={style} id={inputId} type="text" value={props.value} onChange={props.change} />
            </form> 
        </div>
    );
};

export default userInput;