import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDtWJYc791S_GaWBMEm3gGngn21b7OrlEE",
  authDomain: "my-rent-d100e.firebaseapp.com",
  projectId: "my-rent-d100e",
  storageBucket: "my-rent-d100e.appspot.com",
  messagingSenderId: "721838438909",
  appId: "1:721838438909:web:233b562ce89737b7944194",
  measurementId: "G-7203L2ST2E"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseDb = firebase.firestore()
let firebaseStorage=firebase.storage()
let firebaseAuth = firebaseApp.auth()
export {firebaseAuth, firebaseDb,firebaseStorage}
export default {
  firebase, firebaseAuth, firebaseDb
}

