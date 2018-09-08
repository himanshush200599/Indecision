import React from 'react';
 const Option = (props) => {

    return(
      <div className='option'>
    <p className='optiontext'>{props.count}.{props.optionText}</p>  
      <button className="button buttonlink"
        onClick={(e)=>{
          props.handleDeletesOption(props.optionText)}
        }>

        Remove
      </button>
      </div>
    );

}
export default Option;
