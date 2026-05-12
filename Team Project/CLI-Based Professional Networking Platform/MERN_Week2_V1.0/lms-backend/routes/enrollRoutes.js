const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  enrollInCourse,
  getUserEnrollments,
  withdrawFromCourse
} = require('../controllers/enrollController');

router.post('/:courseId', authMiddleware, enrollInCourse);
router.get('/', authMiddleware, getUserEnrollments);
router.delete('/:courseId', authMiddleware, withdrawFromCourse);

module.exports = router;