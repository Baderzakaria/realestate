// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // import { getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl_tFXSd6sMwrmY77uWg7uPd2K4gyqrQU",
  authDomain: "realestate-21a09.firebaseapp.com",
  databaseURL: "https://realestate-21a09-default-rtdb.firebaseio.com",
  projectId: "realestate-21a09",
  storageBucket: "realestate-21a09.appspot.com",
  messagingSenderId: "547309573431",
  appId: "1:547309573431:web:93a1afd706efc61b3236b2",
  measurementId: "G-65HRWDDNQC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;
