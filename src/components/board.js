import React from 'react';
import { Component } from 'react';
import './styles.css';
import Square from '../App';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    } /* Pasamos el estado a los 9 elementos del board */

    /** Definimos la funcion handleClick */

    handleClick(i) {
        const squares = this.state.squares.slice(); /** slice() crea una copia del arreglo para hacerlo inmutable */
        if (calcularGanador(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'; /** Ahora pasamos el estado de xisNext(boleano) para el manejo de los turnos */
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }


    renderSquare(i) {
      return (<Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
             />
        ); /* Se hace el llamado del componente del boton dentro de una funcion (renderSquare)*/
    }
  
    render() {
        const ganador = calcularGanador(this.state.squares);

        let status;
        if (ganador) {
            status = 'Ganador: ' + ganador;
        } else {
            status  = 'Siguiente jug.: '  + (this.state.xIsNext ? 'X' : 'O');
        }
        
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

  /** funcion para calcular el ganador mediante comprobacion del arreglo  */
  function calcularGanador(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default Board;