import React, { Component } from "react";

import "./App.css";

class Multiplevalue extends Component {
  state = {
    stateofText: "",
    array: [],
    count: 1
  };
  componentDidMount() {
    this.setState({ stateofText: this.props.data });
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.state.array.push(this.state.stateofText + this.state.count);
  };
  render() {
    return (
      <ul>
        <li onClick={this.increment}>
          {this.state.stateofText}
          {this.state.array.map((data, index) => {
            return <Multiplevalue data={data} key={index} />;
          })}
        </li>
      </ul>
    );
  }
}
function App() {
  return (
    <div>
      <Multiplevalue data={"A"} />
      <Multiplevalue data={"B"} />
      <Multiplevalue data={"C"} />
    </div>
  );
}
export default App;
