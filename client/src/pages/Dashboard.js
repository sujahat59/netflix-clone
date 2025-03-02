import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5001/api/protected", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Protected API Response:", response.data);
          setData(response.data.message);
        })
        .catch((error) => {
          console.error("Error fetching protected data:", error);
        });
    }
  }, [token]);

  // Move the redirect check *after* useEffect
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <p>Protected API Response: {data}</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
