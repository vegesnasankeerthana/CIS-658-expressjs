const express = require("express");
const app = express();
const port = 3000;

// Serve static files (CSS)
app.use(express.static("public"));

// Route to serve the webpage
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web Architecture Syllabus</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Web Architecture Syllabus</h1>
            </header>
            <section class="syllabus">
                <h2>Course Outline</h2>
                <ul>
                    <li>Introduction to Web Architecture</li>
                    <li>Client-Server Model</li>
                    <li>RESTful APIs and Web Services</li>
                    <li>Frontend and Backend Development</li>
                    <li>Databases and Web Storage</li>
                    <li>Security in Web Applications</li>
                    <li>Scalability and Performance Optimization</li>
                    <li>Cloud Computing and Deployment</li>
                </ul>
            </section>
            <section class="professor">
                <h2>Professor Details</h2>
                <p><strong>Name:</strong> Dr. John Doe</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
                <p><strong>Office Hours:</strong> Mon-Wed 2:00 PM - 4:00 PM</p>
            </section>
        </div>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Create a public folder for static files
to deploy on GitHub, include the following CSS file:

// public/styles.css
const fs = require("fs");
const css = `
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    color: #fff;
    text-align: center;
    padding: 20px;
}
.container {
    max-width: 800px;
    margin: auto;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
}
header {
    font-size: 24px;
    font-weight: bold;
}
.syllabus ul {
    list-style-type: none;
    padding: 0;
}
.syllabus li {
    background: rgba(255, 255, 255, 0.2);
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
}
`; 
fs.mkdirSync("public", { recursive: true });
fs.writeFileSync("public/styles.css", css);

