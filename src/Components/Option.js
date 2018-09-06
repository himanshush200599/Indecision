import React,{ Component } from 'react';
export default class Option extends Component {
  render(){
    return(
      <div>
        Option:{this.props.optionText}
      </div>
    );
}
}
