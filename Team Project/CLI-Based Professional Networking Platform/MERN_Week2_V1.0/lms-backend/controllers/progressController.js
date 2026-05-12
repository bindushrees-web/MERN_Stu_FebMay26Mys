const { courses, enrollments, progress } = require('../data/courses');
const AppError = require('../utils/customError');

const markLessonComplete = (req, res, next) => {
  const courseId = parseInt(req.params.courseId);
  const { lessonId } = req.body;
  const userId = req.user.id;

  if (isNaN(courseId) || !lessonId) {
    return next(new AppError('Invalid course ID or missing lesson ID', 400));
  }

  // Check enrollment
  if (!enrollments[userId]?.includes(courseId)) {
    return next(new AppError('Not enrolled in this course', 400));
  }

  const course = courses.find(c => c.id === courseId);
  const lessonExists = course?.lessons.find(l => l.id === lessonId);
  
  if (!lessonExists) {
    return next(new AppError('Lesson not found', 404));
  }

  const progressKey = `${userId}-${courseId}`;
  if (!progress[progressKey]) {
    progress[progressKey] = [];
  }

  // Check if already completed
  if (progress[progressKey].includes(lessonId)) {
    return next(new AppError('Lesson already completed', 400));
  }

  progress[progressKey].push(lessonId);
  res.status(201).json({ message: 'Lesson marked as complete' });
};

const getProgress = (req, res, next) => {
  const courseId = parseInt(req.params.courseId);
  const userId = req.user.id;

  if (isNaN(courseId)) {
    return next(new AppError('Invalid course ID', 400));
  }

  const progressKey = `${userId}-${courseId}`;
  const completedLessons = progress[progressKey] || [];

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return next(new AppError('Course not found', 404));
  }

  const totalLessons = course.lessons.length;
  const completedCount = completedLessons.length;
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  res.json({
    courseId,
    totalLessons,
    completedLessons: completedCount,
    percentage,
    completedLessonIds: completedLessons
  });
};

module.exports = { markLessonComplete, getProgress };