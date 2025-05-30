const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          We provide a comprehensive platform for managing your projects with
          ease and security. Our mission is to empower developers and
          businesses alike.
        </p>
      </section>

      <style jsx>{`
        .about {
          max-width: 900px;
          margin: 80px auto;
          padding: 0 20px;
          text-align: center;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
        }
        @media (max-width: 600px) {
          h2 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;
