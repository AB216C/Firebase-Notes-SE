import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Register from "./Register";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <Login /> {/* To provide a logout button */}
        </div>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;


// useEffect: Allows side effects, such as subscribing to the user's authentication state.
// useState: Manages the local user state to keep track of the authenticated user.
// onAuthStateChanged: Firebase Authentication listener that monitors changes to the user's authentication state (e.g., login or logout).
// User: Represents the Firebase Authentication User object.
// auth: Firebase Authentication instance.
// Register: Component for user registration.
// Login: Component for login and logout.
// Defining State Variables
// const [user, setUser] = useState<User | null>(null);
// user: Stores the currently authenticated user (null if no user is logged in).
// Authentication State Listener
// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser); // Updates `user` state when auth state changes.
//   });
//   return () => unsubscribe(); // Unsubscribes from the listener on cleanup.
// }, []);
// Sets up a listener using onAuthStateChanged to track changes in the authentication state.
// Updates the user state with the current authenticated user or null if logged out.
// Cleans up the listener when the component unmounts to prevent memory leaks.





