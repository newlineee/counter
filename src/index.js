import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Counter extends React.Component {
  state = {
    neyNey: 0
  };
  artir = () => this.setState({ neyNey: ++this.state.neyNey });
  azalt = () => this.setState({ neyNey: --this.state.neyNey });
  render() {
    return (
      <div>
        <h1>aman da aman</h1>
        <h1>{this.state.neyNey}</h1>
        <button onClick={this.artir}>+</button>
        <button onClick={this.azalt}>-</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
