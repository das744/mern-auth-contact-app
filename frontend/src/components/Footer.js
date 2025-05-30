const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .footer {
          background: #222;
          color: white;
          text-align: center;
          padding: 20px 10%;
          margin-top: 60px;
        }
      `}</style>
    </>
  );
};

export default Footer;
