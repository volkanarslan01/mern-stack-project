const Workout = require("../Models/workoutModels.js");
const mongoose = require("mongoose");

//* get all workouts

const getAllWorkouts = async (req, res) => {
  try {
    const workout = await Workout.find().sort({ resp: 1 }); // ? -1 desc 1 asc
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
};
//* get a single workout

const getWorkout = async (req, res) => {
  const { id } = req.params;
  // ! mongodb id check
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Invalid  mongodb id" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ err: "No such workout" });
  }
  res.status(200).json(workout);
};
// ? create new workout

const createWorkout = async (req, res) => {
  const { title, resp, arr, load } = req.body;
  // ! add doc to db
  try {
    const workout = await Workout.create({ title, resp, arr, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
};

// !  delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  // ! mongodb id check
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Invalid  mongodb id" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    res.status(400).json({ err: "No such workout" });
  }
  res.status(200).json({ workout });
};

//  * update workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { resp } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Invalid  mongodb id" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      resp: resp,
    }
  );
  if (!workout) {
    return res.status(400).json({ err: "No such workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
