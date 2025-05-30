import React from 'react';

const Banner = ({ onGetStartedClick }) => {
  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to Our Platform</h1>
          <p>Your journey starts here. Sign up to get started.</p>
          <a href="#signup" className="btn"> <button onClick={onGetStartedClick}>Get Started</button></a>
        </div>
      </section>

      <style jsx>{`
        .banner {
          background: url('/images/banner.jpg') no-repeat center center/cover;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
        }
        .banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 0;
        }
        .banner-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          padding: 20px;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
        .btn {
          display: inline-block;
          background-color: #ff5c5c;
          color: white;
          padding: 12px 32px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #e04e4e;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Banner;
