const mongoose = require('mongoose');

const RecoverSchema = new mongoose.Schema({
    id: String,
});

var Recover=module.exports = mongoose.model("recover", RecoverSchema);
