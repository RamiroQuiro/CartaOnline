// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtE1cEwaH2eUDM1PoXZ4b8NHabq-AGrLA",
  authDomain: "firestore-app-4200e.firebaseapp.com",
  projectId: "firestore-app-4200e",
  storageBucket: "firestore-app-4200e.appspot.com",
  messagingSenderId: "1063959518160",
  appId: "1:1063959518160:web:7a37de2f5cbc337c5e37d5",
  measurementId: "G-675L6WW0NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);