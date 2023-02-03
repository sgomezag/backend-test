const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    companyName: {
        type: String,
        required: true,
    }
});
const company = mongoose.model('company', mySchema);
module.exports = company;
