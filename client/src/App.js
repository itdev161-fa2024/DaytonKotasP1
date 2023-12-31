/* eslint-disable no-template-curly-in-string */
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ${error}");
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">GoodThings</header>
        {this.state.data}
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        GoodThings 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
