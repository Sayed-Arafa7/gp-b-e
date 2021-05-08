const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = mongoose.Schema({
  level: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  answer: {
    type: Number,
    required: true,
  },

  tags: [
    {
      type: String,
    },
  ],

  student: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  exam: [{ type: Schema.Types.ObjectId, ref: "Exam" }],
  instructor: { type: Schema.Types.ObjectId, ref: "instructor" },
});
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
