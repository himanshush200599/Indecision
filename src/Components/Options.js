import React from 'react';
import Option from './Option';
 const Options = (props)=> {

    //bind re-set the function context again by calling it gain
    //in this situation function handleRemoveAll loses its context so we
    //bind it to this.
    //By this we can now use props passes to parent in function methods also
    //thus bind every method in constructor .


    return(
      <div>
        <button onClick={props.handleDeletesOptions}>Remove All</button>
      {
        props.options.map((option)=> (
          <Option key={option}
            optionText={option}
            handleDeletesOption={props.handleDeletesOption}/>
        ))
      }

      </div>
    );

}
export default Options;
