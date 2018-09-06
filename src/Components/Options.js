import React , { Component } from 'react';
import Option from './Option';
export default class Options extends Component {
  handleRemoveAll(){
    alert("Remove all")
  }
  render(){
    return(
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
      {
        this.props.options.map((option)=> <Option key={option} optionText={option} />)
      }

      </div>
    );
}
}
