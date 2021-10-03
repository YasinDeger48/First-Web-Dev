import React from "react"
import LoginView from './LoginView'
import SignUpView from './SignUpView'
import PasswordReset from './PasswordReset'

//1.giriş
//2.kayıt
//3.reset

class AuthView extends React.Component {

    constructor(){
        super();

        

        this.state = {
            currentView : 2
        }
    }

    changeView(newView){
        this.setState({
            currentView : newView
        })
    }

    render() {
            
        return this.state.currentView === 1 
            ? <LoginView onViewChange={this.changeView.bind(this)}/> 
            :   this.state.currentView === 2
            ? <SignUpView onViewChange={this.changeView.bind(this)} />
            :   this.state.currentView === 3
            ? <PasswordReset onViewChange={this.changeView.bind(this)} />
            : console.log('Not found you request') 
        
}
}
export default AuthView