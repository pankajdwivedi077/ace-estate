// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ace-estate.firebaseapp.com",
  projectId: "ace-estate",
  storageBucket: "ace-estate.appspot.com",
  messagingSenderId: "585988047294",
  appId: "1:585988047294:web:8ec70c19e72ef3730279ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);