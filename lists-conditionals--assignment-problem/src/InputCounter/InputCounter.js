import React from 'react';
import ValidationComponent from '../ValidationComponent/ValidationComponent';

const inputCounter = (props) => {
    let valLength;
    let valLengthMessage;
    if (props.inputs && props.inputs[props.id]) {
        valLength = props.inputs[props.id].length;
        valLengthMessage = (<p>This field contains {valLength} characters.</p>);
    }
    
    return (
        <div>
            <form>
                <label htmlFor={props.id}>{props.title}</label>
                <input id={props.id} type="text" onChange={props.change}/>
                {valLengthMessage}
            </form>
            
            <ValidationComponent
                count={valLength}
            />
        </div>
    );
};

export default inputCounter;