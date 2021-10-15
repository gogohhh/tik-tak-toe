import React from 'react';
import './App.css';
import { Component } from 'react';

class Square extends Component {

   /* Se elimina el contructor por que ahora el estado viene de Board */

  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.props.onClick()} 
      >  {/* Ahora se llama la funcion onClick de Board */ }
       
        {/* Se manda el nuevo estado de la prop */}
        {this.props.value} {/* Se hace el llamdo de la prop value del componente Board  */}
      </button>
    );
  }
}

export default Square;
