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
        <div className="widget-header">
        <h3 className='widget-header-h3'>Your Options</h3>
        <button className='button buttonlink'
           onClick={props.handleDeletesOptions}>Remove All</button>
           </div>
        {props.options.length===0&&<p className='widget-message'>Add items to get started</p>}
      {
        props.options.map((option,index)=> (
          <Option key={option}
            optionText={option}
            count={index+1}
            handleDeletesOption={props.handleDeletesOption}/>
        ))
      }

      </div>
    );

}
export default Options;
