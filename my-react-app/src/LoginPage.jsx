import React, { useState } from "react";
import { login } from "./auth"; 
import "./App.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter email and password");
    }

    try {
      setBusy(true);
      const result = login(email, password); // ✅ no axios call, just local auth

      if (result.success) {
        onLogin();
      } else {
        alert(result.message);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="auth-card">
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={busy}
          >
            {busy ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
