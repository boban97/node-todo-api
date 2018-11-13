const mongoose = require('mongoose');

// Set Promise library
mongoose.Promise = global.Promise;

// Connect to the server
mongoose.connect(`mongodb://${process.env.IP}:27017/TodoApp`, { useNewUrlParser: true });

module.exports = mongoose;