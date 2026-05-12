const jwt = require('jsonwebtoken');
const AppError = require('../utils/customError');

const JWT_SECRET = 'your-secret-key'; // In production, use env variable

const authMiddleware = (req, res, next) => {
  // Check header first, then cookie
  const token = req.headers.authorization?.split(' ')[1] || req.cookies?.token;
  
  if (!token) {
    return next(new AppError('No token provided', 401));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, username, role }
    next();
  } catch (err) {
    next(new AppError('Invalid token', 401));
  }
};

module.exports = authMiddleware;