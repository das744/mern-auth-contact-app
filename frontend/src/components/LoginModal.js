
import React, { useState } from 'react';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        onLoginSuccess(data.token); // Notify App.js
        setForm({ email: '', password: '' });
      }
    } catch (err) {
      setError('Network error, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* <button className="close-btn" onClick={onClose}>×</button> */}
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
           <button onClick={onClose}>Close</button>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal {
          background-color: #000;
          padding: 30px;
          border-radius: 8px;
          width: 100%;
          max-width: 400px;
          text-align: center;
          color: white;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        .modal h2 {
          margin-bottom: 20px;
          color:#666;
        }

        .modal input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #444;
          border-radius: 5px;
          background: #111;
          color: white;
        }

        .modal button[type="submit"] {
          width: 100%;
          padding: 12px;
          background-color: #ff5c5c;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }

        .modal button[type="submit"]:hover {
          background-color: #e04b4b;
        }
         button {
         margin-bottom: 1rem;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: white;
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
        }

        .error {
          color: #d9534f;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default LoginModal;





// // frontend/src/components/LoginModal.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginModal = ({ onClose }) => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, form);
//       alert(`Login successful. Welcome ${res.data.name}`);
//       onClose();
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
//           <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
//           <button type="submit">Login</button>
//         </form>
//         <button onClick={onClose}>Close</button>
//       </div>
//     <style jsx="true">{`
//   .modal-overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 100vw;
//     background: rgba(0, 0, 0, 0.25); /* ← almost solid black */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 9999; /* on top of all content */
//   }

//   .modal {
//     background: #ffffff;
//     padding: 2rem;
//     border-radius: 10px;
//     max-width: 400px;
//     width: 90%;
//     box-shadow: 0 0 15px rgba(0,0,0,0.2);
//     z-index: 10000;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }

//   input {
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }

//   button {
//     padding: 10px;
//     background: #ff4b4b;
//     border: none;
//     color: white;
//     margin-bottom: 2rem;
//     border-radius: 5px;
//     cursor: pointer;
//   }

//   button:hover {
//     background: #e64444;
//   }
// `}</style>

//     </div>
//   );
// };

// export default LoginModal;
