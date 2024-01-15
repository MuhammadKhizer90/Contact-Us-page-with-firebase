// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAky9MloayU05w2kWCCrWjWiGZhXdi80uM",
  authDomain: "contact-form-9768e.firebaseapp.com",
  projectId: "contact-form-9768e",
  storageBucket: "contact-form-9768e.appspot.com",
  messagingSenderId: "556873738990",
  appId: "1:556873738990:web:2aaf9f168771c1d67b61ff",
  measurementId: "G-2QPJ3T6E66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app);