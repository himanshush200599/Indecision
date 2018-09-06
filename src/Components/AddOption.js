import React , { Component } from 'react';
export default class AddOption extends Component {
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
     //trim removes white spaces from string
    if(option){
      alert(option)
    }
    else{
      alert("Add some text in input feild")
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleAddOption}>
            <input type="text" name='option' />
            <button type="submit">Add Option</button>

        </form>
      </div>
    );
}
}
