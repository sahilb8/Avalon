import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';


const toolbar = (props) =>{
  return(
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.NavBar}>
      <NavigationItems />
    </nav>
  </header>);
}

export default toolbar;