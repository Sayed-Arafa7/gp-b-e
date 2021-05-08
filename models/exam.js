const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const examSchema = mongoose.Schema({
  type: {
    type: String,
    minLength: 3,
    maxLength: 22,
  },
  date: {
    type: Date,
  },
  duration: {
    type: Number,
  },

  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});
const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
