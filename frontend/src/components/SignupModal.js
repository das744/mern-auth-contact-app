// frontend/src/components/SignupModal.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, form);
      alert("Signup successful!");
      onClose();
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <button type="submit">Signup</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    <style jsx="true">{`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.25); /* ← almost solid black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* on top of all content */
  }

  .modal {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    z-index: 10000;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    background: #ff4b4b;
    border: none;
    color: white;
     margin-bottom: 2rem;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: #e64444;
  }
`}</style>

    </div>
  );
};

export default SignupModal;
