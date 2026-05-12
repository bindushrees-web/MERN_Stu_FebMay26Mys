const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const restrictTo = require('../middleware/roleMiddleware');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourse,
  updateCourse 
} = require('../controllers/courseController');

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// Admin only
router.post('/', authMiddleware, restrictTo('admin'), createCourse);
router.put('/:id', authMiddleware, restrictTo('admin'), updateCourse);
router.delete('/:id', authMiddleware, restrictTo('admin'), deleteCourse);

module.exports = router;