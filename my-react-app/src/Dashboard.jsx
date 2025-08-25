import React from "react";
import "./App.css";

function Dashboard({ onLogout }) {
  return (
    <div className="login-bg">
      <div className="login-card text-center">
        <h2 className="mb-3">Welcome 🎉</h2>
        <p className="text-muted">You are logged in!</p>

        <button onClick={onLogout} className="btn-primary-sm mt-4 w-100">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;