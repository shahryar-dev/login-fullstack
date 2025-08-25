import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Dashboard from "./Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <>
              <LoginPage onLogin={() => setIsLoggedIn(true)} />
              <div className="text-center mt-3">
                <Link to="/signup">Don’t have an account? Sign Up</Link>
              </div>
            </>
          )}
        </Route>

        <Route path="/signup">
          {isLoggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <>
              <SignUpPage onSignUp={() => (window.location.href = "/")} />
              <div className="text-center mt-3">
                <Link to="/">Already have an account? Login</Link>
              </div>
            </>
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
