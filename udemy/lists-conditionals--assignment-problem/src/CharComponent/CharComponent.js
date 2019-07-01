import React from 'react';

const charComponent = (props) => {
    const currentInput = props.state.inputs && props.state.inputs[props.id] ? props.state.inputs[props.id] : '';
    
    const style = {
        'display': 'inline-block', 
        'padding': '10px 15px', 
        'textAlign': 'center', 
        'fontWeight': 'bold', 
        'borderRadius': '3px',
        'margin': '0px 15px 15px 0px', 
        'border': '1px solid black',
        'cursor': 'pointer',
        'boxShadow': '2px 2px whitesmoke',
        'background': 'whitesmoke'
    };
    
    let characters;
    if (currentInput.length) {
      characters = currentInput.value.split('').map((char,i) => {
          return (
            // using 'i' as a key just because this list of letters have to be created on the fly anyway
            <button key={i} style={style} onClick={(e) => props.click(props.id,i)} aria-label={'remove_'+char}>{char}</button> 
          );
      });
    }
    
    return (
        <div>
            {characters}
        </div>
    );
}

export default charComponent;