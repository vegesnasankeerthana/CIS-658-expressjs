const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the static homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Dynamic syllabus route
app.get("/syllabus", (req, res) => {
  const courseInfo = {
    courseTitle: "Web Architecture",
    professor: {
      name: "Dr. John Doe",
      email: "johndoe@example.com",
    },
    topics: [
      "Introduction to Web Architecture",
      "Client-Server Model",
      "RESTful APIs",
      "Frontend vs Backend",
      "Database Management",
      "Security Best Practices",
    ],
  };

  res.render("syllabus", { course: courseInfo });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
