// src/App.js
import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dishList, setDishList] = useState([]);
  const [commande, setCommande] = useState([]);

  // This function will toggle the NavBar
  const toggleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className={`screen-layout ${isNavOpen ? "shifted" : ""}`}>
          <Header onToggleNavBar={toggleNavBar} commande={commande} />

          <div className="main-content">
            <Routes>
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
            </Routes>
            <Footer />
          </div>
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
