import React from 'react';
import { Component } from 'react';
import './styles.css';
import Square from '../Square';

class Board extends Component {
    
    renderSquare(i) {
      return (<Square 
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
             />
        ); /* Se hace el llamado del componente del boton dentro de una funcion (renderSquare)*/
    }

    render() {
      return (
        <div className="centrado">
          <div className="board-row"> 
            {this.renderSquare(0)} {/* Se usa la funcion (renderSquare) que contiene el componente boton. */}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board;