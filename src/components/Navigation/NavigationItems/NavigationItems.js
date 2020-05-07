// This component will have all the navigation navigationItems, 

import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) =>{
  return(
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/stories">Public Stories</NavigationItem>
      </ul>
  );
}

export default navigationItems;