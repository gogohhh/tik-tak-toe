import React from 'react';
import { Component } from 'react';
import Board from './components/board';

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


class Game extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        history: [{   //* Se guardan los movientos del array
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
        score: 0,
        score2: 0,
      };
    }

    /** Definimos la funcion handleClick */

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();  /** slice() crea una copia del arreglo para hacerlo inmutable */
        
        if (calcularGanador(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'; /** Ahora pasamos el estado de xisNext(boleano) para el manejo de los turnos */
        this.setState({
            history: history.concat([{
              squares: squares,  /** Se combian el arreglo principal con la el array copia */
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    reload = () => {
      window.location.reload(true);
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]; //* Se recorren los movientos anteriores
        const ganador = calcularGanador(current.squares);

        

        let status;
        if (ganador) {
          if(ganador === 'X'){
            this.setState({score: this.state.score + 1});
            }else{
            this.setState({score2: this.state.score2 + 1});
          }
          status = 'Ganador: ' + ganador;
          
          
        } else {
          status = 'Siguiente jug.: ' + (this.state.xIsNext ? 'X' : 'O');
        } 
      
        const moves = history.map((step, move) => {
          const desc = move ? 'Regresar al movimiento:' + move : 'Limpiar';
          return (
            <li key={move}>
              <button class="reiniciar" onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          );
        });

      return (
        <div className="game">
          <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          </div>
          <div class="reset">
            <li key="move">
              {moves}
            </li>
          </div>
          <div className="game-info">
            <div className="tablero_centrado">{ status }</div>
            <ol>{/* TODO */}</ol>
          </div>

          <div className="marcador">
            <div className="title">Puntuación</div>
            <div className="PlayX">Jugador X:
                <span> {this.state.score}</span>
            </div>
            <div className="PlayO">Jugador O:
                <span> {this.state.score2}</span>
            </div>
          </div>
        </div>
      );
    }
}

export default Game;