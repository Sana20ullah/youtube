import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { FaTimes } from "react-icons/fa";

const Register = ({ setUser, onClose }) => {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = () => {
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      return alert("❌ Please fill in all fields.");
    }
    if (password !== confirmPassword) {
      return alert("❌ Passwords do not match.");
    }

    setUser({ fullName, email, password });
    alert("✅ Registration successful! Please login.");
    navigate("/login?fromRegister=1");
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        <div className="auth-box">
        <FaTimes
  className="close-icon"
  onClick={onClose || (() => navigate("/"))}
  style={{
    cursor: "pointer",
    position: "absolute",
    top: "10px",
    right: "10px",
  }}
/>

          <h2>Register</h2>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="buttons">
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
