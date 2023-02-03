const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    mood: {
        type: String,
        required: true,
    },
    optionalExtraFeedback: {
        type: String,
        required: false,
    },
    answers: {
        type: Array,
        required: true,
    }
});
const answers = mongoose.model('answers', mySchema);
module.exports = answers;
