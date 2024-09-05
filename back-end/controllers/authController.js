const bcrypt = require('bcryptjs');
const db = require('../config/db');
const generateToken = require('../config/jwt');

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Internal server error' });

    if (result.length === 0) return res.status(401).json({ success: false, message: 'Invalid email or password' });

    const user = result[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ success: false, message: 'Invalid email or password' });

    const token = generateToken(user.id);
    res.json({ success: true, token, email: user.email });
  });
};
