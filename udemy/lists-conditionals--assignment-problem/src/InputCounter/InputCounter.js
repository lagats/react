import React from 'react';
import './InputCounter.css';

const inputCounter = (props) => {
    const currentInput = props.state.inputs && props.state.inputs[props.id] ? props.state.inputs[props.id] : '';
    
    return (
        <div>
            <form>
                <label htmlFor={props.id}>{props.title}</label>
                <input id={props.id} type="text" aria-describedby={props.id+'__describedby '+props.id+'__describedby2'} onChange={props.change} value={currentInput.value?currentInput.value:''}/>
                {currentInput.length?<p id={props.id+'__describedby'} className="text-count text--sm">This field contains {currentInput.length} characters.</p>:''}
            </form>
        </div>
    );
};

export default inputCounter;