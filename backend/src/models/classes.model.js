const mongoose = require('mongoose');

const classesSchema = mongoose.Schema({
    Grade: { required: true, type: String },
    Section : { required: true, type: String },
    Subject : { required: true, type: String},
    teacher: { type:mongoose.Schema.Types.ObjectId,ref:'teacher',required:false}
}, { versionKey: false, timelaps: true }
)

module.exports = mongoose.model('classes', classesSchema);