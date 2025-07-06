import { useState, type FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
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
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;


// useState: Manages component state for email, password, and errors.
// FormEvent: Type for handling form submission events in TypeScript.
// createUserWithEmailAndPassword: Firebase Authentication method to create a new user with an email and password.
// auth: Firebase Authentication instance imported from the firebaseConfig.ts file.
// email: Stores the user's entered email address.
// password: Stores the user's entered password.
// error: Stores any error messages that occur during registration.
// handleRegister is called when the form is submitted.
// Uses Firebase's createUserWithEmailAndPassword function to register the user.
// If successful, it shows a success alert.
// If there’s an error (e.g., invalid email or weak password), it sets the error message in state.
// Renders a form with:
// An email input field, bound to the email state.
// A password input field, bound to the password state.
// A submit button to trigger the registration process.
// If there's an error in registration, it is displayed as a paragraph element (<p>).