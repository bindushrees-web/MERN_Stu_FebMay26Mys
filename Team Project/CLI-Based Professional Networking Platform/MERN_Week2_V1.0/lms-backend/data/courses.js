let courses = [
  {
    id: 1,
    title: 'Web Development Basics',
    category: 'web',
    difficulty: 'beginner',
    lessons: [
      { id: 1, title: 'HTML Intro' },
      { id: 2, title: 'CSS Basics' },
      { id: 3, title: 'JS Fundamentals' }
    ]
  },
  {
    id: 2,
    title: 'Advanced React',
    category: 'web',
    difficulty: 'advanced',
    lessons: [
      { id: 1, title: 'Hooks Deep Dive' },
      { id: 2, title: 'Context API' }
    ]
  }
];

// Enrollments store: { userId: [courseIds] }
const enrollments = {};

// Progress store: { 'userId-courseId': [completedLessonIds] }
const progress = {};

module.exports = { courses, enrollments, progress };