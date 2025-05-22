import React from "react";

function isLogin() {
  const token = localStorage.getItem("token");
  return !!token;
}

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    // window.location.href = "";
  };

  return (
    <nav className="navbar navbar-dark bg-black py-3">
      <div className="container-fluid">
        <button
          className="btn btn-black text-white me-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
        >
          <i className="fas fa-bars"></i>
        </button>
        {isLogin() ? (
          <>
            <a onClick={handleLogout} className="navbar-brand" href="/">
              <i className="fas fa-sign-out"></i>
            </a>
          </>
        ) : (
          <>
            <a onClick={handleLogout} className="navbar-brand" href="/login">
              <i className="fas fa-user"></i>
            </a>
          </>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;