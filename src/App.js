import React, { Component } from "react";

import "./App.css";

class Multiplevalue extends Component {
  state = {
    stateofText: "",
    multipleaccess: false
  };
  componentDidMount() {
    this.setState({ stateofText: this.props.data });
  }
  render() {
    return (
      <ul>
        <li
          onClick={() =>
            this.setState({ stateofText: this.props.data, multipleaccess: true })
          }
        >
          {this.state.stateofText}
          {this.state.multipleaccess && (
            <Multiplevalue data={this.state.stateofText + 1} />
          )}
        </li>
      </ul>
    );
  }
}
class App extends Component {
  state = {
    stateofB: "B",
    multiplePlusValue: [],
    countB: 1
  };

  increment = () => {
    this.setState({ countB: this.state.countB + 1 });
    this.state.multiplePlusValue.push(this.state.stateofB + this.state.countB);
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <label onClick={this.increment}>B</label>
            {this.state.multiplePlusValue.map((data, index) => {
              return <Multiplevalue data={data} key={index} />;
            })}
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
