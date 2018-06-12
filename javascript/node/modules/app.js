// Import a list of students from students.js
const students = require('./students.js');

// Use destructuring to import _only_ the instructors
const { instructors } = require('./ca.js');



// Loop through our students
students.forEach(student => {
  console.log(student);
});

// Loop through our staff
instructors.forEach(instructor => {
  console.log(instructor);
});
