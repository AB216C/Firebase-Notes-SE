// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

//Contains the Firebase project's credentials and configuration details.
//Need a New Credentials

console.log("API KEY:", import.meta.env.VITE_FIREBASE_API_KEY)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-basics-project-1789e.firebaseapp.com",
  projectId: "fir-basics-project-1789e",
  storageBucket: "fir-basics-project-1789e.firebasestorage.app",
  messagingSenderId: "1055027258812",
  appId: "1:1055027258812:web:92f63740c9a606a53db7b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { auth };



// initializeApp: Initializes a Firebase app instance.
// getAuth: Retrieves the authentication service associated with the Firebase app.
// Auth: A type representing Firebase Authentication.
// const auth: Auth = getAuth(app);
// Retrieves the Authentication service for the initialized Firebase app.
// The auth object is of type Auth, providing strongly typed methods and properties for authentication-related functionality.



