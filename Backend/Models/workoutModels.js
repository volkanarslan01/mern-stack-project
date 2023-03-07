// ? package
const mongoose = require("mongoose");

//! Schema

const Schema = mongoose.Schema;

// ? New Schema Create
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    resp: {
      type: Number,
      required: true,
    },
    arr: {
      type: Array,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
); // new  Schema time

module.exports = mongoose.model("Workout", workoutSchema);
