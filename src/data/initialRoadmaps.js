const initialRoadmaps = [
    {
      title: "Basics of JavaScript",
      tasks: [
        { id: "basics-1", text: "Learn how to include JavaScript in HTML (external, internal, and inline)", done: false, completedAt: null },
        { id: "basics-2", text: "Understand Variables (`var`, `let`, `const`)", done: false, completedAt: null },
        { id: "basics-3", text: "Learn data types: Primitive and Non-Primitive (Objects)", done: false, completedAt: null },
        { id: "basics-4", text: "Explore type conversion: Implicit and Explicit (Key Differences)", done: false, completedAt: null },
      ],
    },
    {
      title: "Core Syntax",
      tasks: [
        { id: "core-syntax-1", text: "Learn operators (Arithmetic, Comparison, Logical, Assignment)", done: false, completedAt: null },
        { id: "core-syntax-2", text: "Understand conditional statements (if, switch)", done: false, completedAt: null },
        { id: "core-syntax-3", text: "Practice loops (for, while, do-while, for-of, for-in) and Event Loop basics", done: false, completedAt: null },
        { id: "core-syntax-4", text: "Learn functions (declaration, expressions, arrow functions) and hoisting", done: false, completedAt: null },
      ],
    },
    {
      title: "DOM Manipulation",
      tasks: [
        { id: "dom-1", text: "Select elements using methods like getElementById and querySelector", done: false, completedAt: null },
        { id: "dom-2", text: "Learn to modify DOM elements (textContent, innerHTML, attributes)", done: false, completedAt: null },
        { id: "dom-3", text: "Understand events, event listeners, and event handlers", done: false, completedAt: null },
        { id: "dom-4", text: "Practice adding and removing elements dynamically", done: false, completedAt: null },
        { id: "dom-5", text: "Learn how to traverse the DOM (parents, children, siblings)", done: false, completedAt: null },
      ],
    },
    {
      title: "Advanced JavaScript",
      tasks: [
        { id: "advanced-1", text: "Learn about closures and lexical scope", done: false, completedAt: null },
        { id: "advanced-2", text: "Understand the 'this' keyword", done: false, completedAt: null },
        { id: "advanced-3", text: "Explore call(), apply(), and bind() methods", done: false, completedAt: null },
        { id: "advanced-4", text: "Learn about asynchronous JavaScript (Event Loop, Web APIs, Task Queues)", done: false, completedAt: null },
        { id: "advanced-5", text: "Study Promises, async/await, and error handling with try-catch", done: false, completedAt: null },
      ],
    },
    {
      title: "ES6 and Beyond",
      tasks: [
        { id: "es6-1", text: "Understand block-scoped variables (let and const)", done: false, completedAt: null },
        { id: "es6-2", text: "Learn about template literals", done: false, completedAt: null },
        { id: "es6-3", text: "Explore destructuring for arrays and objects", done: false, completedAt: null },
        { id: "es6-4", text: "Practice using spread operators", done: false, completedAt: null },
        { id: "es6-5", text: "Understand default function parameters and arrow functions", done: false, completedAt: null },
        { id: "es6-6", text: "Learn about modules (import/export)", done: false, completedAt: null },
        { id: "es6-7", text: "Explore new data structures like Map and Set, and higher-order functions", done: false, completedAt: null },
      ],
    },
    {
      title: "Error Handling",
      tasks: [
        { id: "error-1", text: "Learn how to use try-catch blocks", done: false, completedAt: null },
        { id: "error-2", text: "Understand throw statements", done: false, completedAt: null },
        { id: "error-3", text: "Learn about debugging tools (console, DevTools)", done: false, completedAt: null },
      ],
    },
    {
      title: "Object-Oriented JavaScript",
      tasks: [
        { id: "oo-1", text: "Learn about objects and their properties", done: false, completedAt: null },
        { id: "oo-2", text: "Study prototypes and inheritance", done: false, completedAt: null },
        { id: "oo-3", text: "Learn about ES6 classes", done: false, completedAt: null },
        { id: "oo-4", text: "Explore encapsulation and static methods", done: false, completedAt: null },
      ],
    },
    {
      title: "Working with Arrays",
      tasks: [
        { id: "arrays-1", text: "Learn array methods (unshift, shift, push, pop, length, indexOf)", done: false, completedAt: null },
        { id: "arrays-2", text: "Explore higher-order functions (map, filter, find, forEach, reduce)", done: false, completedAt: null },
        { id: "arrays-3", text: "Understand spread and rest operators with arrays", done: false, completedAt: null },
        { id: "arrays-4", text: "Practice sorting, slicing, and splicing arrays", done: false, completedAt: null },
      ],
    },
    {
      title: "Working with Objects",
      tasks: [
        { id: "objects-1", text: "Learn how to create and manipulate objects (nested objects, merging, etc.)", done: false, completedAt: null },
        { id: "objects-2", text: "Understand object destructuring", done: false, completedAt: null },
        { id: "objects-3", text: "Explore Object.values, Object.keys, and Object.entries", done: false, completedAt: null },
        { id: "objects-4", text: "Practice merging objects with the spread operator", done: false, completedAt: null },
      ],
    },
    {
      title: "Working with JSON",
      tasks: [
        { id: "json-1", text: "Learn the difference between JSON and JavaScript objects", done: false, completedAt: null },
        { id: "json-2", text: "Understand JSON.stringify and JSON.parse", done: false, completedAt: null },
        { id: "json-3", text: "Work with APIs that return JSON data", done: false, completedAt: null },
      ],
    },
    {
      title: "Browser APIs",
      tasks: [
        { id: "browser-1", text: "Learn about localStorage and sessionStorage", done: false, completedAt: null },
        { id: "browser-2", text: "Practice using fetch and XHR for HTTP requests", done: false, completedAt: null },
        { id: "browser-3", text: "Explore the geolocation API and the navigator object", done: false, completedAt: null },
        { id: "browser-4", text: "Learn about setTimeout and setInterval", done: false, completedAt: null },
      ],
    },
    {
      title: "Modules and Tooling",
      tasks: [
        { id: "modules-1", text: "Learn how to use ES modules (import/export)", done: false, completedAt: null },
        { id: "modules-2", text: "Practice bundling JavaScript with tools like Webpack or Vite", done: false, completedAt: null },
        { id: "modules-3", text: "Understand linting tools like ESLint", done: false, completedAt: null },
      ],
    },
    {
      title: "Testing",
      tasks: [
        { id: "testing-1", text: "Learn the basics of writing testable code", done: false, completedAt: null },
        { id: "testing-2", text: "Explore testing frameworks like Jest or Mocha", done: false, completedAt: null },
        { id: "testing-3", text: "Write unit and integration tests for JavaScript code", done: false, completedAt: null },
      ],
    },
    {
      title: "Performance and Optimization",
      tasks: [
        { id: "perf-1", text: "Learn about memory management and garbage collection", done: false, completedAt: null },
        { id: "perf-2", text: "Understand how to debounce and throttle functions", done: false, completedAt: null },
        { id: "perf-3", text: "Optimize loops and DOM manipulations", done: false, completedAt: null },
        { id: "perf-4", text: "Learn about memory leaks", done: false, completedAt: null },
      ],
    },
    {
      title: "Final Projects",
      tasks: [
        { id: "final-1", text: "Build a simple To-do list application", done: false, completedAt: null },
        { id: "final-2", text: "Create a weather app using APIs", done: false, completedAt: null },
        { id: "final-3", text: "Develop a basic CRUD app with localStorage", done: false, completedAt: null },
        { id: "final-4", text: "Create a calculator app", done: false, completedAt: null },
        { id: "final-5", text: "Build a small game (Tic-Tac-Toe or Snake)", done: false, completedAt: null },
      ],
    },
  ];
  
  export default initialRoadmaps;
  