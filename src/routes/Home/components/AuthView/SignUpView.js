import React from 'react';
import axios from 'axios';
import * as Http from '../../../../utils/httpHelper'

class SignUpView extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            hasError: false,
            errorMessage: ''
        }
    }

    onInputChanged(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSignUp(e) {
        e.preventDefault();

        if(this.state.email === "" || this.state.password === ""){

            this.setState({
                hasError :true,
                errorMessage : "please fill all fields !"
            });
            return;
        }

        Http.post (`auth/sign-up`, this.state)
            .then(res => {
                console.log('res',res);

                if(!res.status){
                    this.setState({
                    hasError : !res.status,
                    errorMessage : res.error.code === 11000 ? 'This email address is registered!!' : 'An unexpected error has occurred'
                    })
                }
               
            });

        
          }

          renderError(){
              return <div className="alert alert-danger" style={{margin: "5px 807px 5px 59px"}}>{this.state.errorMessage}</div>
          }
       
    render() {
        const { onViewChange } = this.props;
        const Error =this.renderError.bind(this);

        return (
            <div>
                <form className="form-inline" onSubmit={this.onSignUp.bind(this)}>
                    <div className="form-group">
                        <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.onInputChanged.bind(this)} />
                    </div>
                    <div className="form-group mx-sm-3">
                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onInputChanged.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{margin: "5px"}}>Register</button>
                </form>

                {this.state.hasError ? <Error /> : null}
                <p>
                If you are already a member,  <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                        e.preventDefault();
                        onViewChange(1);
                    }}>click here </a></u></b>to login
                </p>
            </div >
        )
    }

}


export default SignUpView;