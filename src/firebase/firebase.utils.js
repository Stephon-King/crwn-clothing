// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config= {
    apiKey: "AIzaSyDWppmwTHf0m-wlMzv8k_utLnG8scpkTPE",
    authDomain: "crwn-db-a689a.firebaseapp.com",
    projectId: "crwn-db-a689a",
    storageBucket: "crwn-db-a689a.appspot.com",
    messagingSenderId: "323502565708",
    appId: "1:323502565708:web:c1fd3dfe9f0b64e78a07e9",
    measurementId: "G-T8FYY96RE7"
}
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup Google Auth Utility 
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new firebase.auth.GoogleAuthProvider();

// always trigger the google popup when using this google
// auth provider, for authentication & sign-in
provider.setCustomParameters({ prompt: 'select_account' });

// provider can also be for Twitter/Facebook/Github
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// Configuring Firebase Project 
// to Allow us to use google Authentication for signin 
// Back inside Authentication in Firebase NavMenu
// Then Enable  