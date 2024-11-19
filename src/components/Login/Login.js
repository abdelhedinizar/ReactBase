import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Utils/Background/Background";
import { signin, signupWithSocialMedia } from "../../services/AuthServ";
import "./Login.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"; // import render-props version

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const responseFacebook = async (response) => {
    if (response.status !== "unknown") {
      console.log("Login Success:", response);
      const resp = await signupWithSocialMedia(response);
      sessionStorage.setItem("authToken", resp);
      onLogin();
      navigate("/");
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await signin({ email: username, password });
      sessionStorage.setItem("authToken", token);
      onLogin();
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials, please try again.");
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
            <i className="fas fa-utensils"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
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
            <FacebookLogin
              appId="579488631281117"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <i
                  onClick={renderProps.onClick}
                  className="fa-brands fa-facebook"
                ></i>
              )}
            />
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
