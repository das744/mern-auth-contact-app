// frontend/src/components/Header.js

import React from 'react';

const Header = ({ setShowSignup, setShowLogin, isLoggedIn, handleLogout }) => {
  return (
    <header className="header">
      <div className="logo">MERN App</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>

           {!isLoggedIn ? (
            <>
              <button onClick={() => setShowSignup(true)}>Signup</button>
              <button onClick={() => setShowLogin(true)}>Login</button>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        {/* <button onClick={() => setShowLogin(true)} className="nav-btn">Login</button>
        <button onClick={() => setShowSignup(true)} className="nav-btn">Signup</button> */}
      </nav>

      <style jsx="true">{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: #282c34;
          color: white;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav a {
          color: white;
          text-decoration: none;
        }

        .nav-btn {
          background-color: #ff5c5c;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;
