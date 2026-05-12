const jwt = require('jsonwebtoken');
const users = require('../data/users');
const AppError = require('../utils/customError');

const JWT_SECRET = 'your-secret-key';
const JWT_EXPIRES_IN = '1h';

const login = (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return next(new AppError('Username and password required', 400));
  }

  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) {
    return next(new AppError('Invalid credentials', 401));
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  // Store JWT in cookie
  res.cookie('token', token, {
    httpOnly: true,
    // secure: true, // Enable in production (HTTPS)
    // sameSite: 'strict'
  });

  // Also create session for comparison (stateful)
  req.session.userId = user.id;
  req.session.username = user.username;

  res.status(200).json({
    message: 'Login successful',
    token, // Also send in response for Postman testing
    user: { id: user.id, username: user.username, role: user.role }
  });
};

const logout = (req, res) => {
  res.clearCookie('token');
  req.session.destroy();
  res.json({ message: 'Logged out successfully' });
};

module.exports = { login, logout };