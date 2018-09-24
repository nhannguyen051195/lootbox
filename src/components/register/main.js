import React, { Component } from 'react';
import LogIn from './logIn';
import SignUp from './signUp';
import Button from '../UI/Button/Button'
import Logo from '../logo/logo'

class main extends Component {
    state={
        signUp: false,
        signIn : false
    }
    
    signupHandler=()=>{
        this.setState({
            signUp: true
        })
    }
    signInHandler=()=>{
        this.setState({
            signIn: true
        })
    }
    render() {
        let signUp = null;
        if(this.state.signUp===true){
            signUp=<SignUp/>                          
        }
        let signIn = null;
        if(this.state.signIn===true){
            signIn=<LogIn/>                          
        }

        return (
            <div>
               <Logo style={{ width: "100%", margin: 'auto' }}/>     
                <Button onClick={this.signupHandler} btnType="Success">Sign Up</Button>
                <Button onClick={this.signInHandler} btnType="Danger">Sign In</Button>   
                {signUp}
                {signIn}   
            </div>
        );
    }
}

export default main;