// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    

  apiKey: "AIzaSyDkfIDecwaGgmqbJXlA1z_lUDugYY4pg3Y",
  authDomain: "vue-firebase-ec8ca.firebaseapp.com",
  projectId: "vue-firebase-ec8ca",
  storageBucket: "vue-firebase-ec8ca.firebasestorage.app",
  messagingSenderId: "272578390078",
  appId: "1:272578390078:web:292b18245385f0ef00096f"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };