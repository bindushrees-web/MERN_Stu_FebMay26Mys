const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollRoutes = require('./routes/enrollRoutes');
const progressRoutes = require('./routes/progressRoutes');

const app = express();

// ========== MIDDLEWARE (ORDER MATTERS!) ==========
// 1. Body parsers FIRST
app.use(express.json());              // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data

// 2. Cookie & Session
app.use(cookieParser());
app.use(session({
  secret: 'session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));

// 3. Logger
app.use(logger);

// ========== ROUTES ==========
app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use('/enroll', enrollRoutes);
app.use('/progress', progressRoutes);

// Nested route example
app.use('/users/:userId/enrollments', (req, res) => {
  res.json({ message: `Enrollments for user ${req.params.userId}` });
});

// ========== ERROR HANDLER (LAST!) ==========
app.use(errorHandler);

module.exports = app;