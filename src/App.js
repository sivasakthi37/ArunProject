import React, { Component } from "react";

import "./App.css";

class Multiplevalue extends Component {
  state = {
    stateofB: this.props.data,
    multipleaccess: false
  };
  render() {
    return (
      <ul>
        <li
          onClick={() =>
            this.setState({ stateofB: this.props.data, multipleaccess: true })
          }
        >
          {this.state.stateofB + "1"}
          {this.state.multipleaccess && (
            <Multiplevalue data={this.state.stateofB + 1} />
          )}
        </li>
      </ul>
    );
  }
}

class App extends Component {
  state = {
    stateofB: "B",
    multipleaccess: false
  };
  render() {
    return (
      <div>
        <ul>
          <li
            onClick={() =>
              this.setState({ stateofB: "B", multipleaccess: true })
            }
          >
            B
            {this.state.multipleaccess && (
              <Multiplevalue data={this.state.stateofB} />
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
