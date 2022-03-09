import React from "react";
import './sign-in.styles.scss';
import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'



// will be using a class component 
// as we'd need to store what the user's 
// typing

class SignIn extends Component{
    constructor(props)
    {
    super(props);

    // access to state
        this.state = {
            email: '',
            password:''
        }
        
    }


    
    handleSubmit = async event => {
        // when submit's clicked 
        // prevent def. action
        // we want full CTRL ovr 
        // what the submit does
        event.preventDefault();
      
        // destructure our E&P from our State

        const {email, password } = this.state; 

        // Try Block Await for Auth

        try{

          await auth.signInWithEmailAndPassword(
            email,
            password,
          );

          // if the above succeeds then we'd clear our state.
          this.setState({ email: '', password: '' })



        }catch(error){
          console.log(error);
        }

        
      


        
    }
 
 
    handleChange = event => {
    // event.target, checks the name of email & pass.
    // & sets state by it's value
    // then the function handleChange is called
    //via onChange to facilitate this
        const { value, name } = event.target;

        this.setState({  [name]:value  })
    }

    render() {
        return (
          <div className="sign-in">
            <h2> I already have an account</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email"
                required
              />

              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
                required
              />

              <div className="buttons">
                <CustomButton type="submit"> Sign In</CustomButton>

                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  {" "}
                  Sign In With Google{" "}
                </CustomButton>
              </div>
              
            </form>
          </div>
        );
    }
}

export default SignIn;