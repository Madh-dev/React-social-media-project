// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC-Vnfo_6FtJCtwMNirOGny-cEVRAB2ig",
  authDomain: "aqueous-radio-375823.firebaseapp.com",
  projectId: "aqueous-radio-375823",
  storageBucket: "aqueous-radio-375823.appspot.com",
  messagingSenderId: "728589900339",
  appId: "1:728589900339:web:d8fe722bac2b34aecbe146",
  measurementId: "G-J6JK68T08P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)