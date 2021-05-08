const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionSchema = mongoose.Schema({
  hardLevel: {
    type: String,
    required: true,
    enum: ["hard", "intermediate", "easy"],
  },
  type: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 60,
  },
  answer: {
    type: Number,
    required: true,
  },

  exam: { type: Schema.Types.ObjectId, ref: "Exam" },
});
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
