// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXSVbvonGhINNc-2fmnD8xLGFM63pVeso",
  authDomain: "ema-john-simple-9ff63.firebaseapp.com",
  projectId: "ema-john-simple-9ff63",
  storageBucket: "ema-john-simple-9ff63.appspot.com",
  messagingSenderId: "120421437181",
  appId: "1:120421437181:web:bd2ef695f6899cf7ddb894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;