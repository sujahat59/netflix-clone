import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/message")
      .then(response => response.json())
      .then(data => {
        console.log("API Response:", data);
        setMessage(data.message);
      })
      .catch(error => console.error("Error fetching message:", error));
  }, []);
  

  const PrivateRoute = ({ children }) => {
    return localStorage.getItem("token") ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Netflix Clone</h1>
        <p>Backend Message: {message}</p>
      </div>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
