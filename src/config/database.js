// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALB4XFAxTBtSEGFVhaAqBxgyXjaMI9eLg",
  authDomain: "restaurante-reserva-cd8ee.firebaseapp.com",
  projectId: "restaurante-reserva-cd8ee",
  storageBucket: "restaurante-reserva-cd8ee.appspot.com",
  messagingSenderId: "138992955333",
  appId: "1:138992955333:web:36fdd66a9ea7d6ddfde5ac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();