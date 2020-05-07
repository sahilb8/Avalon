import React,{Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
  state = {
    showSideDrawer: false
  }

  changeShowSideHandler = ()=>{
    this.setState({showSideDrawer: false})
  }

  changeDrawToggleClicked = ()=>{
    //Do this when you are dependent on the value of the previous state
    this.setState((prevState) =>{      
      return{showSideDrawer: !prevState.showSideDrawer}
    })
  }
  render(){
    return(
    <Aux >
       <Toolbar drawToggleClicked={this.changeDrawToggleClicked}/>
       <SideDrawer open={this.state.showSideDrawer} closed={this.changeShowSideHandler}/>
      <main className={classes.Content}>
      {this.props.children}
      </main>    
    </Aux>
  ); 
  }
}

export default Layout;