const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lectureSchema = mongoose.Schema({
  id: {
    type: Number,
    minLength: 3,
    maxLength: 22,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  duration: {
    type: Number,
  },
  linkToFiles: {
    type: Date,
  },
  lectures: [{ type: Schema.Types.ObjectId, ref: "Class" }],
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

const lecture = mongoose.model("lecture", lectureSchema);

module.exports = lecture;
