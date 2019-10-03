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
        <li
          onClick={() =>
            this.setState({
              stateofText: this.props.data,
            })
          }
        >
          <label onClick={this.increment}>{this.state.stateofText}</label>
        </li>
        {this.state.array.map((data, index) => {
          return <Multiplevalue data={data} key={index} />;
        })}
      </ul>
    );
  }
}
class App extends Component {
  state = {
    stateofA: "A",
    stateofB: "B",
    stateofC: "C",
    multiplePlusValueB: [],
    multiplePlusValueA: [],
    multiplePlusValueC: [],
    countA: 1,
    countB: 1,
    countC: 1
  };

  increment = Text => {
    if (Text === "B") {
      this.setState({ countB: this.state.countB + 1 });
      this.state.multiplePlusValueB.push(
        this.state.stateofB + this.state.countB
      );
    } else if (Text === "A") {
      this.setState({ countA: this.state.countA + 1 });
      this.state.multiplePlusValueA.push(
        this.state.stateofA + this.state.countA
      );
    } else if (Text === "C") {
      this.setState({ countC: this.state.countC + 1 });
      this.state.multiplePlusValueC.push(
        this.state.stateofC + this.state.countC
      );
    }
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <label onClick={() => this.increment("A")}>A</label>
            {this.state.multiplePlusValueA.map((data, index) => {
              return <Multiplevalue data={data} key={index} />;
            })}
          </li>
          <li>
            <label onClick={() => this.increment("B")}>B</label>
            {this.state.multiplePlusValueB.map((data, index) => {
              return <Multiplevalue data={data} key={index} />;
            })}
          </li>
          <li>
            <label onClick={() => this.increment("C")}>C</label>
            {this.state.multiplePlusValueC.map((data, index) => {
              return <Multiplevalue data={data} key={index} />;
            })}
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
