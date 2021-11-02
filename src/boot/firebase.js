import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
  apiKey: process.env.KEY,
  authDomain: "my-rent-d100e.firebaseapp.com",
  projectId: "my-rent-d100e",
  storageBucket: "my-rent-d100e.appspot.com",
  messagingSenderId: "721838438909",
  appId: process.env.APP_ID,
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

