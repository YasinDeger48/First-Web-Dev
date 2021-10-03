import React, { Component } from "react";
import { connect } from 'react-redux';
import {userInit } from 'store/userReducer';

class LoginView extends React.Component {

    constructor(){
      super();

      this.state = {
        email : "",
        password :""
      }
    }

  emailChanged (e){
    this.setState ({
      email : e.target.value
    })
    }

  passwordChanged (e) {

    this.setState ({
      password : e.target.value
    })
  }



  onUserClick(){
    //http call
    console.log(this.state);
    const user = {
        name : "Yasin DEĞER",
        email : "yd@gmail.com",
        age : 35,
        gender: "male"
    }
    this.props.loginUserData(user);
  }


  render() {
    const onViewChange = this.props.onViewChange;

    if(this.props.userData.name){
      return <div>WELCOME! LOGIN IS SUCCEED.</div>
    }
    return (
      <div>
        <form className="form-inline">
          <div className="form-group mb-2">
            <label for="staticEmail2" className="sr-only">
              Email
            </label>
            <input type="text" className="form-control" placeholder="e-mail" value={this.state.email} onChange={this.emailChanged.bind(this)}/>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" className="sr-only">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.passwordChanged.bind(this)}
            />
          </div>
          <button type="button" className="btn btn-primary mb-2" onClick={this.onUserClick.bind(this)}>
            Sign In
          </button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onViewChange(3);
            }}
          >
            Forgot Password!
          </a>
        </form>
        <p style={{ fontweight: "bolder" }}>
          If you haven't registered yet,
          <span className="click">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange(2);
              }}
            >
            
              click here
            </a>
          </span>
          to register.
        </p>
      </div>
    )
  }
}
const mapStateToProps =(state) => {
  return {
      userData :state.user
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      loginUserData : (user) => dispatch(userInit(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
// export default LoginView;
