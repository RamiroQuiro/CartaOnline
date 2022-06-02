// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app)
export const storage = getStorage(app);
export const storageRef = ref(storage);
export const gAuth=getAuth(app)