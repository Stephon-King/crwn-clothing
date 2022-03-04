import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-In-and-sign-up/sign-In-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import { Component } from "react";

// store the login state for either E&P or GoogleAuth
// && pass it into the components that need it

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // we need to have a CLOSE_SUBSCRIPTION 
  // to prevent memory leaks
  // this gives us back a function that when
  // we call closes the subscription
  unsubscribeFromAuth = null;

  componentDidMount()
  { 
    //onAuthStateChanged is an OPEN_SUBSCRIPTION 
    // which is notified of any changes
    // happening on Firebase's side from
    // any source related to our app.
    // Firebase sends out a msg saying
    // the auth state has changed & the user has updated
    // wether they've signed in via Google/Email&Passwrd Signup
    // Or They've signed out
    // then it'll give us  {{currentUser:user}}
    //so we won't need to manually fetch everytime we want to check
    //if  that state is changed
    // this connection's always opened as long as
    // our App Component is mounted on  our DOM.
    
    // but becuz its an OPEN_SUBSCRIPTION we'd also need to 
    // CLOSE_SUBSCRIPTION once this subscription unmounts

 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(( user ) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount()
  {
    // calling this closes the 
    // subscription, so there's no memory leaks 
    this.unsubscribeFromAuth();
  }

  // this is how we handle our app handling any auth changes on firebase.

  render() {
    return (
      <div>
        <Header
        // have to ensure our header 
        // knows when a user's : signedIn || signedOut

          currentUser={this.state.currentUser}
        />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
