// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_XDBif12f55Yz1hdbcdMAKOLkXqxcL2I",
  authDomain: "netflixgpt-816be.firebaseapp.com",
  projectId: "netflixgpt-816be",
  storageBucket: "netflixgpt-816be.appspot.com",
  messagingSenderId: "685515937771",
  appId: "1:685515937771:web:10ce6be44f4fdd2d692bae",
  measurementId: "G-JZS27V00H3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
