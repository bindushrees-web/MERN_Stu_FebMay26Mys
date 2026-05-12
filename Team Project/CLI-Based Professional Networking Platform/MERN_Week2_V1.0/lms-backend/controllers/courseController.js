const { courses } = require('../data/courses');
const AppError = require('../utils/customError');

const getAllCourses = (req, res) => {
  let result = [...courses];
  
  // Query filtering
  if (req.query.category) {
    result = result.filter(c => c.category === req.query.category);
  }
  if (req.query.difficulty) {
    result = result.filter(c => c.difficulty === req.query.difficulty);
  }

  res.json(result);
};

const getCourseById = (req, res, next) => {
  const courseId = parseInt(req.params.id);
  
  if (isNaN(courseId)) {
    return next(new AppError('Invalid course ID', 400));
  }

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return next(new AppError('Course not found', 404));
  }

  res.json(course);
};

// Admin only
const createCourse = (req, res, next) => {
  const { title, category, difficulty, lessons } = req.body;
  
  if (!title || !category || !difficulty) {
    return next(new AppError('Missing required fields', 400));
  }

  const newCourse = {
    id: courses.length + 1,
    title,
    category,
    difficulty,
    lessons: lessons || []
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
};

const deleteCourse = (req, res, next) => {
  const courseId = parseInt(req.params.id);
  const index = courses.findIndex(c => c.id === courseId);
  
  if (index === -1) {
    return next(new AppError('Course not found', 404));
  }

  courses.splice(index, 1);
  res.json({ message: 'Course deleted successfully' });
};


const updateCourse = (req, res, next) => {
  const courseId = parseInt(req.params.id);
  
  if (isNaN(courseId)) {
    return next(new AppError('Invalid course ID', 400));
  }

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return next(new AppError('Course not found', 404));
  }

  const { title, category, difficulty, lessons } = req.body;

  // Update fields if provided
  if (title) course.title = title;
  if (category) course.category = category;
  if (difficulty) course.difficulty = difficulty;
  if (lessons) course.lessons = lessons;

  res.json({
    message: 'Course updated successfully',
    course
  });
};

// Don't forget to export it!
module.exports = { 
  getAllCourses, 
  getCourseById, 
  createCourse, 
  deleteCourse,
  updateCourse  // ✅ Add this
};

module.exports = { getAllCourses, getCourseById, createCourse, deleteCourse, updateCourse };