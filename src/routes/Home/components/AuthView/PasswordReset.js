import React from "react";

const PasswordReset = ({onViewChange}) => (

  <div>
    <form className="form-inline">
      <div className="form-group mb-2">
        <label for="staticEmail2" className="sr-only">
          Email
        </label>
        <input type="text" className="form-control" placeholder="email" />
      </div>
      <div className="form-group mx-sm-3 mb-2">
      <label for="inputPassword2" className="sr-only">Password</label>
      <input type="password" className="form-control" placeholder="Password"/>
    </div>
      <button style={{marginLeft:"5px"}} type="submit" className="btn btn-primary mb-2">
        Reset Password
      </button>
    </form>
    <p>
      If you are remembered you password <a href="#" onClick={ e => { e.preventDefault(); onViewChange(1) }}> Click Here </a>
    </p>
  </div>
)

export default PasswordReset
