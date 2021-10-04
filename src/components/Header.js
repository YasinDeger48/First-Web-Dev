import React from "react";
import { defaultConfig } from "sinon";
import { Link } from 'react-router';


class Header extends React.Component{

    constructor(){
      super();
      this.state={
        isNavOpen:false
      }
    }

    buttonClicked(){
      this.setState({
        isNavOpen:!this.state.isNavOpen
      })
    }


  render(){
  

  return (
    <header style={{marginleft: "50px"}}>
      <nav className="navbar navbar-expand-lg justify-content-between">
        <a className="navbar-brand" href="#">
          Learn English
        </a>
        <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="navbar-collapse" style={{display:this.state.isNavOpen ? "block" : "none", marginleft: "800px"}} >
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/" activeClassName="active" className="nav-link">HOME </Link>
          </li>
          <li className="nav-item">
          <Link to="/about" activeClassName="active" className="nav-link">ABOUT </Link>
          </li>
          <li className="nav-item">
          <Link to="/contact" activeClassName="active" className="nav-link">CONTACT </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}}
export default Header;
