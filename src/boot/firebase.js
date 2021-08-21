// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAb7EThUH8XzZjwvOyiLR5TL7wFpjYENFo",
  authDomain: "orochat-7fe02.firebaseapp.com",
  projectId: "orochat-7fe02",
  storageBucket: "orochat-7fe02.appspot.com",
  messagingSenderId: "466519826738",
  appId: "1:466519826738:web:b4c9608a481fe2e078f72b"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }