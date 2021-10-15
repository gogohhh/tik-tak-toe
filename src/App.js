import React from 'react';
import './App.css';
import { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button 
        className="square" 
        onClick={
          () => this.setState({value: 'X'})
        }
      >
        {/* Se manda el nuevo estado de la prop */}
        {this.state.value} {/* Se hace el llamdo de la prop value del componente Board  */}
      </button>
    );
  }
}

export default Square;
