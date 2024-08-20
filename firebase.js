// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfODEeoUvhGbZcX3riEvhfWUSLTLwnmg",
  authDomain: "flashcards-fc838.firebaseapp.com",
  projectId: "flashcards-fc838",
  storageBucket: "flashcards-fc838.appspot.com",
  messagingSenderId: "474685162881",
  appId: "1:474685162881:web:db85ddd57f35bab3bb5480",
  measurementId: "G-HW7RL7BE6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);