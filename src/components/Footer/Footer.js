import React from "react";
import './Footer.css';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';

const footer = ()=>{
  return(
    <div className="main-footer">
      <div className="container">
          <div className="row">
              <div class="col l6 s12">
                  <h5 class="white-text">Avalon</h5>
                  <p class="grey-text text-lighten-4">Share your life with the world</p>
              </div>
              <div className="col">

              </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <NavigationItem link="/stories">Public Stories</NavigationItem>
                  <NavigationItem link="/about">About</NavigationItem>
                </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Avalon
            </p> 

          </div>
      </div>
    </div>
  );
}


export default footer;