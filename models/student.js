const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = mongoose.Schema({
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
  year: {
    type: Number,
  },
  dateOfBirth: {
    type: Date,
  },

  exams: [{ type: Schema.Types.ObjectId, ref: "Exams" }],
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
