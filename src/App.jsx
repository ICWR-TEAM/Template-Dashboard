// import { useState } from 'react'
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/AdminDashboard";
import Login from "./pages/Login";

function checkAuth() {
  const token = localStorage.getItem("token");
  return !!token;
}

function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/#/login";
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
}

function App() {
  const isLoggedIn = checkAuth();
  const yearCopy = new Date().getFullYear();

  return (
    <Router>
      <Navbar />
      <Sidebar login={isLoggedIn} />
      <div className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer year={yearCopy} />
      {/* <Footer /> */}
    </Router>
  );
}

export default App
