import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLRfvxsYiUkYgYZS6f3sGBHxKUMMs5Llg",
    authDomain: "journalapp-36c3e.firebaseapp.com",
    projectId: "journalapp-36c3e",
    storageBucket: "journalapp-36c3e.appspot.com",
    messagingSenderId: "750079952712",
    appId: "1:750079952712:web:8995904143ea282c3d557d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }