import React , { Component } from 'react';
import Option from './Option';
export default class Options extends Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    //bind reset the function context again by calling it gain
    //in this situation function handleRemoveAll loses its context so we
    //bind it to this.
    //By this we can now use props passes to parent in function methods also
    //thus bind every method in constructor .
  }
  handleRemoveAll(){
    alert(this.props.options)
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
