const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  markLessonComplete,
  getProgress
} = require('../controllers/progressController');

router.post('/:courseId/lesson', authMiddleware, markLessonComplete);
router.get('/:courseId', authMiddleware, getProgress);

module.exports = router;