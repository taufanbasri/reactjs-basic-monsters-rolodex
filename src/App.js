import { Component } from "react";

import CardList from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState({ searchField });
  };

  render() {
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

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
