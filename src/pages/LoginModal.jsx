import React, { useState } from "react";
import { API_BASE_URL } from "../Config";

function Login({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        onClose();
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("Network error, please try again.");
    }
  };

  return (
    <>
      <div className="modal-backdrop show"></div>

      <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1050 }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-black text-light">
            <div className="modal-header border-light">
              <h2 className="mb-3 text-white">Login</h2>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  Username
                  <input
                    type="text"
                    className="form-control bg-black text-white border-light"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  Password
                  <input
                    type="password"
                    className="form-control bg-black text-white border-light"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-light w-100">
                  Login
                </button>
              </form>
            </div>
            <div className="modal-footer border-light">
              <a href="/" className="text-white">RusherMedia - incrustwerush.org</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;