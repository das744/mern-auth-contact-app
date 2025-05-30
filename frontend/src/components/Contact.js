import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log('API URL:', process.env.REACT_APP_API_URL);


      if (!res.ok) {
        setError(data.message || 'Failed to send message');
      } else {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setError('Network error, try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      <style jsx>{`
        .contact {
          max-width: 700px;
          margin: 80px auto;
          padding: 0 20px;
          text-align: center;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #333;
        }
        form input,
        form textarea {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          resize: none;
        }
        button {
          padding: 14px 20px;
          font-size: 1.1rem;
          background-color: #ff5c5c;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
        }
        button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
        button:hover:not(:disabled) {
          background-color: #e04b4b;
        }
        .error {
          color: #d9534f;
          margin-bottom: 15px;
        }
        .success {
          color: #28a745;
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default Contact;
