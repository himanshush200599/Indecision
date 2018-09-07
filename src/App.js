import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Action from './Components/Action';
import AddOption from './Components/AddOption';
import Options from './Components/Options';
//also we can pass default props toany componnet by defining by ComponentName.
//defaultProps.
class App extends Component {
  constructor(props){
    super(props);
    this.handleDeletesOptions = this.handleDeletesOptions.bind(this);
    this.handleDeletesOption = this.handleDeletesOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state={
      options :  ['banana','orange','apple']
    }
  }
handleDeletesOptions(){
  this.setState(()=>({options:[] }));
}
handleDeletesOption(optionToRemove){
  this.setState((prevState)=>({
    options:prevState.options.filter((option)=>{
      return optionToRemove!==option;
    })
  }));

}
handlePick(){
  const rand = Math.floor(Math.random()*this.state.options.length)
  alert(this.state.options[rand])
}
handleAddOption(option){
  if(!option){
    return "This feild cannot be empty";
  }
  else if (this.state.options.indexOf(option)>-1){
    return "This item all ready exists";
  }
  this.setState((prevState)=>({options: prevState.options.concat([option])}));

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
          handleDeletesOptions={this.handleDeletesOptions}
          handleDeletesOption={this.handleDeletesOption} />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

export default App;
