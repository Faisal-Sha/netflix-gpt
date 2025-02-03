// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0SWqSONU8KflGrI8446DCNsvPS1TjL_E",
  authDomain: "netflix-gpt-6b65e.firebaseapp.com",
  projectId: "netflix-gpt-6b65e",
  storageBucket: "netflix-gpt-6b65e.firebasestorage.app",
  messagingSenderId: "6448489672",
  appId: "1:6448489672:web:221d86f9cc5119ef39b1fd",
  measurementId: "G-JZZPXCJZTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);