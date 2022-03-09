import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firestore = firebase.firestore();

// GET DOCUMENTS / COLELCTIONS FROM FIREBASE!

// up to collection('users') gives the ID for that collection
// doc() gives us the actual document via its ID 
// then we can chain unto that doc('id') to get the collection of cart items 4 that specific id
// chaning the doc('id') for that particular id that's within the cartItems
firestore.collection('users').doc('WMawppzBsTeDG5h5hy4X').collection('cartItems').doc('qskyDLorBRT4Ib6JgioC');

// another way to implement this 
firestore.doc('/users/WMawppzBsTeDG5h5hy4X/cartItems/qskyDLorBRT4Ib6JgioC');


// if we wanted the collection of cartItems then...
firestore.collection('/users/WMawppzBsTeDG5h5hy4X/cartItems');