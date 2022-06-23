import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Taufan", lastName: "Prasetyo" },
      company: "Lubna Tech",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({name: { firstName: "Babang", lastName: "Tamvan" }});
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
