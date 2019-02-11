import React from 'react';

const removeCharacters = (state,e,i) => {
    state.
  
  
  console.log(e,i);
};

const charComponent = (props) => {
    const currentInput = props.state.inputs && props.state.inputs[props.id] ? props.state.inputs[props.id] : '';
    
    const style = {
        'display': 'inline-block', 
        'padding': '10px 15px', 
        'textAlign': 'center', 
        'fontWeight': 'bold', 
        'borderRasadius': '3px',
        'margin': '16px', 
        'border': '1px solid black',
        'boxShadow': '2px 2px whitesmoke'
    };
    
    let characters;
    if (currentInput.length) {
      characters = currentInput.value.split('').map((char,i) => {
          return (
            // using 'i' as a key just because this list of letters have to be created on the fly anyway
            <p key={i} style={style} onClick={(e) => props.click(props.id,e,i)}>{char}</p>
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