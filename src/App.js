import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Action from './Components/Action';
import AddOption from './Components/AddOption';
import Options from './Components/Options';

class App extends Component {
  constructor(props){
    super(props);
    this.handleDeletesOptions = this.handleDeletesOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state={
      options :  ['banana','orange','apple']
    }
  }
handleDeletesOptions(){
  this.setState(()=>{
    return{
    options:[]
     }
  });
}
handlePick(){
  const rand = Math.round(Math.random()*this.state.options.length)
  alert(this.state.options[rand])
}
  render() {
    const title = ' Indecision-App';
    const subtitle = 'Put your life in the hands of computer';

    return (
      <div className="App">
        <Header title={title} subtitle = {subtitle} />
        <Action hasOptions = {this.state.options.length>0}
          handlePick={this.handlePick}/>
        <Options options={this.state.options}
          handleDeletesOptions={this.handleDeletesOptions} />
        <AddOption />
      </div>
    );
  }
}

export default App;
