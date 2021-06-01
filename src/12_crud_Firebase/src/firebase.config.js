import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyB69vMb95TrxUPa_OWuoAA8AEsc7jmzFjY",
  authDomain: "belajar-react-be1af.firebaseapp.com",
  databaseURL: "https://belajar-react-be1af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-react-be1af",
  storageBucket: "belajar-react-be1af.appspot.com",
  messagingSenderId: "210278288039",
  appId: "1:210278288039:web:11bc300c1e079d3d4b6982",
  measurementId: "G-X9G4WC2CRV"
  };

  export const myFirebase = firebase.initializeApp(firebaseConfig);
  export const DB = firebase.database();