// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4EOZAW6r0oW_wGA3mQlpSLWFOReRzraQ",
  authDomain: "social-media-app-e02d9.firebaseapp.com",
  projectId: "social-media-app-e02d9",
  storageBucket: "social-media-app-e02d9.appspot.com",
  messagingSenderId: "773854417458",
  appId: "1:773854417458:web:850685e2673f6f6dcda22b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);