
import { initializeApp } from "firebase/app";  //Initiating firebase connection
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdevP6bcWbiAd-Wav7ksAVbvOH43fuhVA",
  authDomain: "crud-project-8248e.firebaseapp.com",
  projectId: "crud-project-8248e",
  storageBucket: "crud-project-8248e.firebasestorage.app",
  messagingSenderId: "808060263741",
  appId: "1:808060263741:web:b51c511f3d10d0ff8c3954",
  measurementId: "G-79PMXKEZVH"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//Creating connection doesn't quarantee database

