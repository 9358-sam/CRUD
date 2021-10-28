const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    username: {type: String, required: true },
    password: {type: String, required: true }
    
});

module.exports = mongoose.model('Post', postSchema);