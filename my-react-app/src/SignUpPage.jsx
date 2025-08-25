import React, { useState } from "react";
import "./App.css";
import { signup } from "./auth";

function SignUpPage({ onSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  try {
    signup(email, password);
    alert("Signup successful! Please login.");
    onSignUp();  // redirect to login
  } catch (err) {
    alert(err.message); // shows "Email already registered"
  }
};

  return (
    <div className="login-bg">
      <div className="login-card">
        <h3 className="text-center">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-input mb-3"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-input mb-4"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary-sm" disabled={busy}>
            {busy ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
