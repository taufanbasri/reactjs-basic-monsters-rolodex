import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");

    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount()");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState({ searchField });
  };

  render() {
    console.log("render");

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={this.onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
