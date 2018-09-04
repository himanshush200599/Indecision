import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Action from './Components/Action';
import AddOption from './Components/AddOption';
import Options from './Components/Options';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Action />
        <AddOption />
        <Options />
      </div>
    );
  }
}

export default App;
