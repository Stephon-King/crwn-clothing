import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  //   HANDLE SUBMIT
  handleSubmit = async (event) => {
    event.preventDefault();

    //  we want to do almost the same thing in App.js
    // where we've got the authentication happening
    // just we'd be creating it manually.
    // Here we're destructing these var's out from the state Obj.

    const { displayName, email, password, confirmPassword } = this.state;

    //  password & confirm password Match check
    if (password != confirmPassword) {
      alert("Passwords Don't Match");
      return;
    }

    if (displayName.length > 45) {
        alert ("Display Name Can't Be More Than 45 Characters");
        return;
    }

    try {
      // New Auth Method that comes with Auth Library
    //   ensure you've set the email & password 
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      // if the above succeds then we'd want to RESET our state

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      // any error in processing or in fetching / creating
      // log the error to the console
      console.error(error);
    }
  };
  // handleSubmit



//   HANDLECHANGE

  handleChange = event => {
    //   destructure off the event, name & value
        const { name, value } = event.target;

    //   set the state, 
    // dynamically setting name value to value's value.
    this.setState({[name]: value})
      
  }
//   handleChange

  // render contains actual signup form and button components
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account</h2>
        <span className=""> Sign up with your email and password</span>

        <form
          className="sign-up-form"
          onSubmit={this.handleSubmit} // a method yet towrite
        >
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
