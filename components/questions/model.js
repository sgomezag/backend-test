const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    questionText: {
        type: String,
        required: true,
    },
    categoryQuestion: {
        type: String,
        required: true,
    }
});
const questions = mongoose.model('questions', mySchema);
module.exports = questions;
