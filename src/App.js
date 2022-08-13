import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    count: 0
  };

  limite = {
    counter: 10
  };

  Add = () => {
    if (this.state.count < this.limite.counter) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  Remove = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <>
        <h1>Contador</h1>
        <p>{this.state.count}</p>
        <button onClick={this.Add}>Aumentar</button>
        <button onClick={this.Remove}>Diminuir</button>
      </>
    );
  }
}
