// src/App.js
import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import OrderSuccess from "./components/Order/OrderSuccess/OrderSuccess";
import { getUser } from "./services/AuthServ";

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dishList, setDishList] = useState([]);
  const [commande, setCommande] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const verifyUser = async () => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      try {
        const userData = await getUser(token); // Fetch user data
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Token verification failed:", error);
        setIsAuthenticated(false);
        sessionStorage.removeItem("authToken"); // Remove token if invalid
      }
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("authToken");
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // This function will toggle the NavBar
  const toggleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className={`screen-layout ${isNavOpen ? "shifted" : ""}`}>
          <Header
            onToggleNavBar={toggleNavBar}
            commande={commande}
            isAuthenticated={isAuthenticated}
          />

          <div className="main-content">
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <Menu
                    dishes={[dishList, setDishList]}
                    commandeDishs={[commande, setCommande]}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/commande"
                element={<Order commande={[commande, setCommande]} />}
              />
              <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <div className={`navbar-layout ${isNavOpen ? "open" : ""}`}>
          <NavBar />
        </div>
      </div>
    </Router>
  );
}

const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

export default App;
