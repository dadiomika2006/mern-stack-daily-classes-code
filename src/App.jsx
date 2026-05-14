import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

// Component & Provider Imports
import NavBar from "./components/NavBar";
import CartProvider from "./service/CartProvider";
import ProtectedRoute from "./components/ProtectedRoute";

// Page Imports
import LandingPage from './Pages/LandingPage';
import CartPage from './Pages/CartPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Dashboard from './Pages/Dashboard';
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  const [isLogin, setLogin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(!!token); // Sets true if token exists, false otherwise
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          {/* Public Routes inside CartProvider if they need access to cart data */}
          <Route path="/" element={<LandingPage />} />
          <Route path="cart" element={<CartPage />} />
          
          {/* Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Protected Routes */}
          <Route 
            path="home" 
            element={
              <ProtectedRoute authenticated={isLogin}>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="products" 
            element={
              <ProtectedRoute authenticated={isLogin}>
                <Products />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute authenticated={isLogin}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />

          {/* Fallback Route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;