// Modules
const express = require('express');
const bodyParser = require('body-parser');

// Modules (Local)
const mongoose = require('./db/mongoose');
const Todo = require('./models/Todo');
const Users = require('./models/User');

// Initialise Express
const app = express();

// Middleware for the Body Parser
app.use(bodyParser.json());

// Create new todo
app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => res.status(200).send(doc)).catch(error => res.status(400).send(error));
});

app.listen(process.env.PORT, () => console.log(`The server has been started on the port: ${process.env.PORT}`));