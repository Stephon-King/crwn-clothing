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
// go over this tutorial and take notes
  
// async action
    export const createUserProfileDocument = async ( userAuth, additionalData ) => {

        if ( !userAuth )  return;
        
        // Query inside of Firestore for the doc, if it 
        // already exists
        
        // documentRef Object: Useful for CRUD Operations
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        // snapShotObject references the Data
        const snapShot = await userRef.get();
        
        if(!snapShot.exists)
        {
          // doesn't exist, then create it
          // data to create the document
          const { displayName, email } = userAuth;

          // we want to know when the object was created in
          // the DB. Getting current date & current time
          // twas created
          const createdAt = new Date();

          // wrap the async request in try-catch-block
          // Send an Auth Object (Specific Properties) to
          // Firestore DB
          try {
            // .set({}) is the CREATE method in CRUD.
            await userRef.set({
              // pass in object properties
              displayName,
              email,
              createdAt,
              ...additionalData,
            });
          } catch (error) {
            console.log("error creating user", error.message);
          }
        }
        return userRef;

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