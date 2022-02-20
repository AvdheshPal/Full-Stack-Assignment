const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    Name: { required: true, type: String },
    Gender: { required: true, type: String },
    Age: { required: true, type: Number },
    class: [{ type: mongoose.Schema.Types.ObjectId, ref: 'classes', required: false, default: "No Class" }]
}, { versionKey: false, timelaps: true }
)

module.exports = mongoose.model("teacher",teacherSchema)