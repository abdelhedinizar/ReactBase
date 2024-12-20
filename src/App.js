// src/App.js
import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import Purchases from "./components/Purchase/Purchase";
import OrderSuccess from "./components/Order/OrderSuccess/OrderSuccess";
import { getUser } from "./services/AuthServ";
import RoleProtectedRoute from "./components/Route/RoleProtectedRoute";
import Unauthorized from "./components/Utils/Unauthorized/Unauthorized";
import { getYourPurchase } from "./controllers/UserController";
import { getPurchasesOftheDay } from "./controllers/StaffController";

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PurchaseItem from "./components/Purchase/HorizontalScroller/PurchaseItem/PurchaseItem";
import Settings from "./components/Admin/Settings/Settings";
import MyPurchaseItem from "./components/Purchase/HorizontalScroller/MyPurchaseItem/MyPurchaseItem";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dishList, setDishList] = useState([]);
  const [commande, setCommande] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const getCommandFromSessionStorage = () => {
    const commandeDish = JSON.parse(sessionStorage.getItem("commandeDish"));
    if (commandeDish) {
      setCommande(commandeDish);
    }
  };

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
    getCommandFromSessionStorage();
    verifyUser().finally(() => setLoading(false));
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    verifyUser();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("authToken");
  };

  // eslint-disable-next-line no-unused-vars
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // This function will toggle the NavBar
  const toggleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
                    user={user}
                  />
                }
              />
              <Route
                path="/admin"
                element={
                  <RoleProtectedRoute
                    allowedRoles={["admin"]}
                    user={user}
                    isAuthenticated={isAuthenticated}
                  >
                    <Admin />
                  </RoleProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={<Settings dishes={dishList} />}
              />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/myPurchases"
                element={
                  <Purchases
                    user={user}
                    purchases={getYourPurchase}
                    from="myPurchases"
                  >
                    <MyPurchaseItem />
                  </Purchases>
                }
              />

              <Route
                path="/purchases"
                element={
                  <Purchases purchases={getPurchasesOftheDay} from="purchases">
                    <PurchaseItem />
                  </Purchases>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/commande"
                element={
                  <Order commande={[commande, setCommande]} user={user} />
                }
              />
              <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <div className={`navbar-layout ${isNavOpen ? "open" : ""}`}>
          <NavBar
            logout={handleLogout}
            isAuthenticated={isAuthenticated}
            user={user}
          />
        </div>
      </div>
    </Router>
  );
}

const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const Admin = () => <h2>Admin Page</h2>;

export default App;
