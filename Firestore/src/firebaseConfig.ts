// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOJTrsmcngq1M7B_4JolfnLd7I4j-YtT8",
  authDomain: "firestore-project-386e5.firebaseapp.com",
  projectId: "firestore-project-386e5",
  storageBucket: "firestore-project-386e5.appspot.co",
  messagingSenderId: "959679057953",
  appId: "1:959679057953:web:4e2e419ef3eb5e6ea95360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };