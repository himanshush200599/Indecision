import React , { Component } from 'react';
import Option from './Option';
export default class Options extends Component {

    //bind re-set the function context again by calling it gain
    //in this situation function handleRemoveAll loses its context so we
    //bind it to this.
    //By this we can now use props passes to parent in function methods also
    //thus bind every method in constructor .

  render(){
    return(
      <div>
        <button onClick={this.props.handleDeletesOptions}>Remove All</button>
      {
        this.props.options.map((option)=> <Option key={option} optionText={option} />)
      }

      </div>
    );
}
}
