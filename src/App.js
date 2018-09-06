import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Action from './Components/Action';
import AddOption from './Components/AddOption';
import Options from './Components/Options';
class App extends Component {

  render() {
    const title = ' Indecision-App';
    const subtitle = 'Put your life in the hands of computer';
    const options = ['banana','orange','apple']
    return (
      <div className="App">
        <Header title={title} subtitle = {subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

export default App;
