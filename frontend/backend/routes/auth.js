const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    res.status(200).json({ msg: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;









// // backend/routes/auth.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');
// const router = express.Router();

// // Signup
// router.post('/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const hashed = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashed });
//     res.json(user);
//   } catch (err) {
//     res.status(400).json({ error: 'Signup failed' });
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: 'Incorrect password' });

//     res.json({ name: user.name, email: user.email });
//   } catch (err) {
//     res.status(400).json({ error: 'Login failed' });
//   }
// });

// module.exports = router;


