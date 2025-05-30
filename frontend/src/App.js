import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import LoginModal from './components/LoginModal';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <>
      <Header
        setShowSignup={setShowSignup}
        setShowLogin={setShowLogin}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      <Banner onGetStartedClick={() => setShowSignup(true)} />

      <About />
      <Services />
      <Contact />
      <Footer />

      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}

export default App;
