import React from 'react';

const inputCounter = (props) => {
    const currentInput = props.state.inputs && props.state.inputs[props.id] ? props.state.inputs[props.id] : '';
    
    return (
        <div>
            <form>
                <label htmlFor={props.id}>{props.title}</label>
                <input id={props.id} type="text" onChange={props.change} value={currentInput.value?currentInput.value:''}/>
                {currentInput.length?<p>This field contains {currentInput.length} characters.</p>:''}
            </form>
        </div>
    );
};

export default inputCounter;