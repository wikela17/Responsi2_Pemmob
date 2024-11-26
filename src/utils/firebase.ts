// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkfIDecwaGgmqbJXlA1z_lUDugYY4pg3Y",
  authDomain: "vue-firebase-ec8ca.firebaseapp.com",
  projectId: "vue-firebase-ec8ca",
  storageBucket: "vue-firebase-ec8ca.appspot.com", // Fixed potential typo
  messagingSenderId: "272578390078",
  appId: "1:272578390078:web:292b18245385f0ef00096f",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

// Export services for use in other parts of the app
export { auth, googleProvider, db };
