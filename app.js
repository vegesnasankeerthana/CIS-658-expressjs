const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set up static folder to serve CSS files
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS for rendering the HTML view
app.set('view engine', 'ejs');

// Route to render the syllabus and professor details
app.get('/', (req, res) => {
    res.render('index', {
        professor: {
            name: 'Dr. John Doe',
            department: 'Computer Science',
            office: 'Room 202, Tech Building',
            email: 'johndoe@example.com'
        },
        syllabus: [
            { week: 1, topic: 'Introduction to Web Architecture' },
            { week: 2, topic: 'Client-Server Model' },
            { week: 3, topic: 'HTTP Protocol and Web Servers' },
            { week: 4, topic: 'Web Technologies: HTML, CSS, JS' },
            { week: 5, topic: 'Database Integration and APIs' },
            { week: 6, topic: 'Scalability and Load Balancing' },
            { week: 7, topic: 'Web Security' },
            { week: 8, topic: 'Cloud Computing in Web Architecture' },
            { week: 9, topic: 'Web Frameworks' },
            { week: 10, topic: 'Project Work and Final Exam' }
        ]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
