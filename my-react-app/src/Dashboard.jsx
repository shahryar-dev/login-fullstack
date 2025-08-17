import React from "react";
import "./App.css";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard d-flex flex-column align-items-center justify-content-center">
      <h1>Welcome 🎉</h1>
      <p className="text-muted">Visitor</p>
      <button onClick={onLogout} className="logout-btn mt-4">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
