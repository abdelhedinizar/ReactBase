import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from '../Utils/Background/Background';
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onLogin();
      navigate("/"); // Redirect to home or protected page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <Background />
      <div className="login-box">
        <h2>Good to see you! Please, come in, relax. Your table is ready!</h2>
        <p>
          Enjoy special offers by logging in, or skip for now and continue as a
          guest.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fas fa-utensils"></i> {/* Fork icon */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i> {/* Lock icon */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="p-link">
          Or connect with{" "}
          <span>
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
          <span>
            <i class="fa-brands fa-google-plus-g"></i>
          </span>
        </p>
        <p className="p-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
        <p className="p-link">
          Continue as a <a href="/">guest</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
