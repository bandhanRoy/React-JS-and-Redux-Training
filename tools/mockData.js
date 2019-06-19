const courses = [
  {
    id: 1,
    title: "Course 1",
    slug: "Course 1",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "Course 2",
    slug: "Course 2",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Course 3",
    slug: "Course 7",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Course 4",
    slug: "Course 7",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Course 5",
    slug: "Course 7",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Course 6",
    slug: "Course 7",
    authorId: 1,
    category: "React"
  },
  {
    id: 7,
    title: "Course 7",
    slug: "Course 7",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Course 8",
    slug: "Course 7",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Course 9",
    slug: "Course 7",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Course 10",
    slug: "Course 7",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Management" },
  { id: 2, name: "Abdullah Khan" },
  { id: 3, name: "Imran Khan" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
