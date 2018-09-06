import React,{Component} from 'react';
class Action extends Component {
  handlePick(){
    alert("Hi there!!!");
  }
  render(){
    return(
      <div>
        <button onClick={this.handlePick}>Click me</button>
      </div>
    );
}
}
export default Action;
