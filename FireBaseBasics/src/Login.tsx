import { useState, type FormEvent } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (err: any) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Login;



// useState: Manages local component state for email, password, and errors.
// FormEvent: Provides type safety for form submission events.
// signInWithEmailAndPassword: Firebase method for signing in users with email and password.
// signOut: Firebase method for logging out users.
// auth: The Firebase Authentication instance from the configuration file.
// const handleLogin = async (e: FormEvent) => {
//   e.preventDefault(); // Prevents page reload on form submission.
//   try {
//     await signInWithEmailAndPassword(auth, email, password); // Signs in the user.
//     alert("Login successful!"); // Alerts the user on successful login.
//   } catch (err: any) {
//     setError(err.message); // Sets error message if login fails.
//   }
// };
// Prevents default form behavior.
// Attempts to sign in the user using Firebase Authentication..
// Displays a success message if login succeeds or sets an error message if it fails.