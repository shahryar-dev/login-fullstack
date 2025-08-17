import React, { useState } from "react";
import axios from "axios";
import "./App.css";  // import custom CSS

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please enter email and password");
    try {
      setBusy(true);
      const res = await axios.post("http://localhost:5000/login", { email, password });
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        onLogin();
      }
    } catch {
      alert("Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
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
          <button type="submit" className="btn btn-primary w-100" disabled={busy}>
            {busy ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
