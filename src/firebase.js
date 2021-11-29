import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDj5YSoNxxYlbZhrCp-68CBTJ-mKcLlm0M",
    authDomain: "react-class-online.firebaseapp.com",
    projectId: "react-class-online",
    storageBucket: "react-class-online.appspot.com",
    messagingSenderId: "1097155948742",
    appId: "1:1097155948742:web:44b77cfaa6fb80b40ea7c7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider ();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider ();

export { auth, googleAuth, facebookAuthProvider }


  