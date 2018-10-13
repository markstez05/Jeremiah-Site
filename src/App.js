import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import NavBar from "./components/nav";
import Info  from "./components/info";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="App">
     <NavBar />
      <Main />
      <Info />
      <Contact />
      <footer className="footer">© 2018 Jeremiah Hall, Inc | Site By Sakkey 2018</footer>
      </div>
    );
  }
}

export default App;
