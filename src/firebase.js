// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRf2EpasZu2OuPMw11YJL72VtPutzkK4w",
  authDomain: "board-infinity-assignmen-12d32.firebaseapp.com",
  projectId: "board-infinity-assignmen-12d32",
  storageBucket: "board-infinity-assignmen-12d32.appspot.com",
  messagingSenderId: "152633193022",
  appId: "1:152633193022:web:dd7c925b28c1276f2b976f",
  measurementId: "G-X5W93J2LQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};