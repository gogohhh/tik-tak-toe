import React from 'react';
import { Component } from 'react';
import './styles.css';
import Square from '../App';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    } /* Pasamos el estado a los 9 elementos del board */

    /** Definimos la funcion handleClick */

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares})
    }


    renderSquare(i) {
      return (<Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
             />
        ); /* Se hace el llamado del componente del boton dentro de una funcion (renderSquare)*/
    }
  
    render() {
      const status = 'Siguiente jug.: X';
  
      return (
        <div className="centrado">
          <div className="status">{status}</div>
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