// ! packages
const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../Controllers/workoutControllers.js");
const router = express.Router();
const Workout = require("../Models/workoutModels.js");

// * POST a new workout
// ! New Database
router.post("/", createWorkout);
// ? Get all workouts
router.get("/", getAllWorkouts);

// ? Single Workout
router.patch("/:id", getWorkout);

// * Update
router.put("/", async (req, res) => {
  const { load } = req.body;
  const updateWorkout = Workout.updateOne(
    { load: load },
    { $set: { resp: 20 } },
    { multi: true }
  );
  try {
    res.status(200).json(updateWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ! DELETE a workout
router.delete("/:id", deleteWorkout);

// * UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;

// ? Insert Many
// router.post("/", async (req, res) => {
//   const postWorkout = await Workout.insertMany({
//     title: "Hello",
//     resp: 12,
//     arr: [1, 2, 3, 4],
//     load: 10,
//   });
//   res.status(200).json(postWorkout);
// });
