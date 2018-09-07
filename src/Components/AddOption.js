import React , { Component } from 'react';
export default class AddOption extends Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state={
      error:undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
     //trim removes white spaces from string
     const error = this.props.handleAddOption(option);
     this.setState(()=>{
       return{
         error //this is similar to error:error
       }
     })
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
            <input type="text" name='option' />
            <button type="submit">Add Option</button>

        </form>
      </div>
    );
}
}
