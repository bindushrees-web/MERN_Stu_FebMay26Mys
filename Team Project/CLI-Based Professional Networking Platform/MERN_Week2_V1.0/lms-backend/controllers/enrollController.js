const { courses, enrollments } = require('../data/courses');
const AppError = require('../utils/customError');

const enrollInCourse = (req, res, next) => {
  const courseId = parseInt(req.params.courseId);
  const userId = req.user.id;

  if (isNaN(courseId)) {
    return next(new AppError('Invalid course ID', 400));
  }

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return next(new AppError('Course not found', 404));
  }

  // Initialize user's enrollments if not exists
  if (!enrollments[userId]) {
    enrollments[userId] = [];
  }

  // Check duplicate enrollment
  if (enrollments[userId].includes(courseId)) {
    return next(new AppError('Already enrolled in this course', 400));
  }

  enrollments[userId].push(courseId);
  res.status(201).json({ message: 'Enrolled successfully', courseId });
};

const getUserEnrollments = (req, res) => {
  const userId = req.user.id;
  const userEnrollments = enrollments[userId] || [];
  
  const enrolledCourses = userEnrollments.map(id => 
    courses.find(c => c.id === id)
  ).filter(Boolean);

  res.json(enrolledCourses);
};

const withdrawFromCourse = (req, res, next) => {
  const courseId = parseInt(req.params.courseId);
  const userId = req.user.id;

  if (!enrollments[userId] || !enrollments[userId].includes(courseId)) {
    return next(new AppError('Not enrolled in this course', 400));
  }

  enrollments[userId] = enrollments[userId].filter(id => id !== courseId);
  res.json({ message: 'Withdrawn successfully' });
};

module.exports = { enrollInCourse, getUserEnrollments, withdrawFromCourse };