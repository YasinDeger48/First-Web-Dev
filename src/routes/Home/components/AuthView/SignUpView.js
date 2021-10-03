import React from 'react';
import axios from 'axios';
import * as Http from '../../../../utils/httpHelper'

class SignUpView extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            hasError: false,
            errorMessage: ""
        }
    }

    onInputChanged(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSignUp(e) {
        e.preventDefault();

        Http.post (`auth/sign-up`, this.state)
            .then(res => {
                console.log(res);
            });

        
          }
       
    render() {
        const { onViewChange } = this.props;
        

        return (
            <div>
                <form className="form-inline" onSubmit={this.onSignUp.bind(this)}>
                    <div className="form-group">
                        <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.onInputChanged.bind(this)} />
                    </div>
                    <div className="form-group mx-sm-3">
                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onInputChanged.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
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