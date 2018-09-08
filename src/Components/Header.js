import React from 'react';
const Header = (props) =>{

    return(
      <div className='header'>
        <div className='container'>
          <h1 className='headertitle'>
          {props.title}
          </h1>
          <h3 className='headersubtitle'>{props.subtitle}</h3>
        </div>

      </div>
    );

}
export default Header;
