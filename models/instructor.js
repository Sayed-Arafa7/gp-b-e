const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const instructorSchema = mongoose.Schema({
  firstname: {
    type: String,
    minLength: 3,
    maxLength: 22,
  },
  lastname: {
    type: String,
    minLength: 3,
    maxLength: 22,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  hiringDate: {
    type: Date,
    default: new Date(),
  },
  dateOfBirth: {
    type: Date,
  },
  teachingLevel: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  lectures: [{ type: Schema.Types.ObjectId, ref: "Class" }],
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});
const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
