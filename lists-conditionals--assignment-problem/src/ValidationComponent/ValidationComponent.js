import React from 'react';

const validationComponent = (props) => {
    const currentInput = props.state.inputs && props.state.inputs[props.id] ? props.state.inputs[props.id] : '';
    
    return (
        <div>
            <p id={props.id+'__describedby2'} className="text--sm">
                {currentInput.length >= props.messages.min_length ? props.messages.too_long : props.messages.too_short}
            </p>
        </div>
    );
};

export default validationComponent;