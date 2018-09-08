import React, { Component } from 'react';
import './App.css';
import 'normalize.css/normalize.css';
import Header from './Components/Header';
import Action from './Components/Action';
import AddOption from './Components/AddOption';
import Options from './Components/Options';
import OptionModal from './Components/OptionModal';
//also we can pass default props toany componnet by defining by ComponentName.
//defaultProps.
class App extends Component {
  constructor(props){
    super(props);
    this.handleDeletesOptions = this.handleDeletesOptions.bind(this);
    this.handleDeletesOption = this.handleDeletesOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.state={
      options :  [],
      selectedOption:undefined
    }
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if(options){
        this.setState(()=>({options:options}));
      }

    } catch (e) {
      //if try block does notr run then catch block, will execute.
      console.log("Your app is fail here.local stoage doesnot work well")
    }

  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length!==this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options",json);
    }
  }
handleDeletesOptions(){
  this.setState(()=>({options:[] }));
}
handleModalClose(){
  this.setState(()=>({selectedOption:undefined}))
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
  const option = this.state.options[rand];
  this.setState(()=>({selectedOption:option}));
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
        <div className="container">

        <Action hasOptions = {this.state.options.length>0}
          handlePick={this.handlePick}/>
        <div className="widget">
        <Options options={this.state.options}
          handleDeletesOptions={this.handleDeletesOptions}
          handleDeletesOption={this.handleDeletesOption} />
        <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleModalClose = {this.handleModalClose}
           />
      </div>
    </div>
    );
  }
}

export default App;
