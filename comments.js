// Create web server
// Run: node comments.js
// Access: http://localhost:8080
// Access: http://localhost:8080/comments
// Access: http://localhost:8080/comments/1

// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Set the port number
const port = 8080;

// Use the static files in the public directory
app.use(express.static('public'));

// Set the route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// Set the route for the comments page
app.get('/comments', (req, res) => {
    res.send('Welcome to the comments page!');
});

// Set the route for the comments page
app.get('/comments/:id', (req, res) => {
    res.send(`Welcome to the comments page for comment ${req.params.id}!`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});