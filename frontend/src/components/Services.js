const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Authentication</h3>
            <p>Secure signup and login with JWT and bcrypt encryption.</p>
          </div>
          <div className="service-item">
            <h3>Database Storage</h3>
            <p>Reliable data storage with MongoDB Atlas cloud service.</p>
          </div>
          <div className="service-item">
            <h3>Contact Management</h3>
            <p>Save and manage user messages via a contact form.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services {
          background: #f7f7f7;
          padding: 80px 10%;
          text-align: center;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #333;
        }
        .service-list {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
        }
        .service-item {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
          padding: 20px;
          flex: 1 1 250px;
          min-width: 250px;
        }
        .service-item h3 {
          margin-bottom: 10px;
          color: #ff5c5c;
        }
        .service-item p {
          color: #555;
          font-size: 1rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .service-list {
            flex-direction: column;
            align-items: center;
          }
          .service-item {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
