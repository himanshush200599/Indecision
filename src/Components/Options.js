import React , { Component } from 'react';
import Option from './Option';
export default class Options extends Component {
  render(){
    return(
      <div>
      {
        this.props.options.map((option)=> <Option key={option} optionText={option} />)
      }

      </div>
    );
}
}
