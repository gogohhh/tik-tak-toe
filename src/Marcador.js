import React from 'react';
import { Component } from 'react';

class Marcador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marcador: 0
        };
    }

    render() {
        let puntoX = this.setState.marcador;
        let puntoO = this.setState.marcador;
        return(
            <div className="marcador">
                <div className="title">Puntuación</div>
                <div className="PlayX">Jugador X:
                    <span>{puntoX}</span>
                </div>
                <div className="PlayO">Jugador O:
                    <span>{puntoO}</span>
                </div>
            </div>
        )
    }
    
}

export default Marcador;