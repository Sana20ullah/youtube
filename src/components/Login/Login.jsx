import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Login.css";

const Login = ({ user, setUser, onClose, onSwitchToRegister }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fromRegister, setFromRegister] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("fromRegister") === "1") {
      setFromRegister(true);
    }
  }, [location.search]);

  const handleLogin = () => {
    if (!user) {
      alert("❌ No user registered.");
      return;
    }

    if (email === user.email && password === user.password) {
      alert("✅ Login successful!");

      if (fromRegister) {
        setTimeout(() => {
          alert("✅ Thank you! Now you are able to upload videos.");
        }, 300);
      }

      if (onClose) onClose(); // close popup if any
      navigate("/");
    } else {
      alert("❌ Invalid email or password.");
    }
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
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttons">
            <button
              onClick={() => {
                if (onSwitchToRegister) {
                  onSwitchToRegister(); // ✅ modal switch
                } else {
                  navigate("/register"); // 🔁 fallback
                }
              }}
            >
              Register
            </button>
            <button onClick={handleLogin} disabled={!email || !password}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
