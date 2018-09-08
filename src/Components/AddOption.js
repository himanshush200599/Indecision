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
     this.setState(()=>({error}));

       e.target.elements.option.value="";
       e.target.elements.option.focus();

  }//this is similar to error:error
  render(){
    return(
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className='add-option' onSubmit={this.handleAddOption}>
            <input className='add-option-input' type="text" name='option' />
            <button className='button' type="submit">Add Option</button>

        </form>
      </div>
    );
}
}
