import React, { Component } from "react";

import "./App.css";

class Multiplevalue extends Component {
  state = {
    stateofText: "",
    Textarray: [],
    count: 1
  };
  componentDidMount() {
    this.setState({ stateofText: this.props.data });
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.state.Textarray.push(this.state.stateofText + this.state.count);
  };
  render() {
    return (
      <ul>
        <li
          onClick={() =>
            this.setState({
              stateofText: this.props.data
            })
          }
        >
          <label onClick={this.increment}>{this.state.stateofText}</label>
        </li>
        {this.state.Textarray.map((data, index) => {
          return <Multiplevalue data={data} key={index} />;
        })}
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
