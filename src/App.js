import React, { Component } from "react";
import Cards from "./components/cardlists/cards";
import Search from "./components/cardlists/searchbox/Searchbox";
import "./App.css"
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchword: "",
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }
  handleChange = (e) => {
    this.setState({
      searchword: e.target.value,
    });
  };

  render() {
    const { monsters, searchword } = this.state;
    let FilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchword.toLowerCase())
    );
    console.log("fm" + FilteredMonsters);
    return (
      <div>
        <h1 className='head'>MONSTER'S WORLD</h1>
        <Search
          placeholder={"SEARCH MONSTERS"}
          hanleChange={this.handleChange}
        />
        <Cards monsters={FilteredMonsters}></Cards>
      </div>
    );
  }
}
