import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config ={
    apiKey: "AIzaSyCgvW8Bi79o88h0w6jJJH4QI9o0qy6RHq0",
    authDomain: "ecommerce-8d133.firebaseapp.com",
    databaseURL: "https://ecommerce-8d133.firebaseio.com",
    projectId: "ecommerce-8d133",
    storageBucket: "ecommerce-8d133.appspot.com",
    messagingSenderId: "741002064204",
    appId: "1:741002064204:web:ba8977ef79f22eaa8f1fe9"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;


