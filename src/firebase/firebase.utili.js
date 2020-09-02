import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const config = {
//   apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
//   authDomain: 'crwn-db.firebaseapp.com',
//   databaseURL: 'https://crwn-db.firebaseio.com',
//   projectId: 'crwn-db',
//   storageBucket: 'crwn-db.appspot.com',
//   messagingSenderId: '850995411664',
//   appId: '1:850995411664:web:7ddc01d597846f65'
// };

const config ={
  apiKey: "AIzaSyCgvW8Bi79o88h0w6jJJH4QI9o0qy6RHq0",
  authDomain: "ecommerce-8d133.firebaseapp.com",
  databaseURL: "https://ecommerce-8d133.firebaseio.com",
  projectId: "ecommerce-8d133",
  storageBucket: "ecommerce-8d133.appspot.com",
  messagingSenderId: "741002064204",
  appId: "1:741002064204:web:ba8977ef79f22eaa8f1fe9"
};

// const config = {
//   apiKey: "AIzaSyCq4Y11fkzvgBzMam-zXqSLK-4i3z-f9kk",
//   authDomain: "online-store-62ea6.firebaseapp.com",
//   databaseURL: "https://online-store-62ea6.firebaseio.com",
//   projectId: "online-store-62ea6",
//   storageBucket: "online-store-62ea6.appspot.com",
//   messagingSenderId: "472879115741",
//   appId: "1:472879115741:web:e53e9d4304964fd15ada34",
//   measurementId: "G-PMVSG2DWGM"
// };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;