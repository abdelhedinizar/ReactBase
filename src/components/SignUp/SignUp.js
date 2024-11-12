import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Utils/Background/Background";
import { signup } from "../../services/AuthServ"; // Import the signup function
import "./SignUp.css"; // Reuse the same CSS

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Call the signup service with the user data
      await signup({ name, email, password, confirmPassword });
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed, please try again.");
    }
  };

  return (
    <div className="login-container">
      <Background />
      <div className="login-box">
        <h2>Join Us! Your seat is ready!</h2>
        <p>Create an account to enjoy exclusive offers and more.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fas fa-user"></i> {/* User icon */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-envelope"></i> {/* Email icon */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i> {/* Password icon */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i> {/* Confirm password icon */}
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="p-link">Or join with</p>
        <div className="p-link">
          <span className="social-icon facebook"><i className="fa-brands fa-facebook"></i></span>
          <span className="social-icon instagram"><i className="fa-brands fa-instagram"></i></span>
          <span className="social-icon google"><i className="fa-brands fa-google-plus-g"></i></span>
        </div>
        <p className="p-link">
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
