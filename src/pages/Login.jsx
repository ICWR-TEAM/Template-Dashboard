import { useState, useEffect } from "react";
import { API_BASE_URL } from "../Config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) window.location.href = "/";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      localStorage.setItem("token", "dummy");
      window.location.href = "/";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card bg-black text-white border-light">
            <div className="card-body">
              <h2 className="mb-3 text-white">Login</h2>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="text-white">Email</label>
                  <input
                    type="email"
                    className="form-control bg-black text-white border-light"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="text-white">Password</label>
                  <input
                    type="password"
                    className="form-control bg-black text-white border-light"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-light w-100" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
              {/*
              <hr />
              <a href="/register" className="btn btn-outline-light w-100">Register</a>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
