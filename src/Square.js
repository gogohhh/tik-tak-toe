import React from 'react';
import './App.css';

function Square(props) {

    return (
      <button 
        className="square" 
        onClick={props.onClick} 
      >  {/* Ahora se llama la funcion onClick de Board */ }
       
        {/* Se manda el nuevo estado de la prop */}
        {props.value} {/* Se hace el llamdo de la prop value del componente Board  */}
      </button>
    );
  
}

export default Square;
