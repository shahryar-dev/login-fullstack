import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Restore login from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <LoginPage onLogin={() => setIsLoggedIn(true)} />
          )}
        </Route>

        <Route path="/dashboard">
          {isLoggedIn ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
