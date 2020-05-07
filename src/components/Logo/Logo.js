import React from 'react';
import Image from '../../assets/images/logo.png';
//we have to tell webpack to use this image , else if u directly specify the path in image tag then it wont work.
import classes from './Logo.module.css';

const logo = (props) =>{
  return(
    <div className={classes.Logo}>
      <img src={Image} alt="Avalon"/>
    </div>
  );
}

export default logo;