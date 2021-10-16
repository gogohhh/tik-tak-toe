import React from 'react';
import { Component } from 'react';
import Game from './Game';

class Marcador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marcador: 0
        };
    }

    incrementar(){
        this.setState((state) => {
            
        })
    }

    render() {
        let puntoX = this.setState.marcador + 1;
        let puntoO = this.setState.marcador + 1;
        return(
            <div className="marcador">
                <div className="title">Puntuación</div>
                <div className="PlayX">Jugador X:
                    <span> {puntoX}</span>
                </div>
                <div className="PlayO">Jugador O:
                    <span> {puntoO}</span>
                </div>
            </div>
        )
    }
    
}

export default Marcador;