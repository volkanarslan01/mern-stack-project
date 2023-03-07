// ! packages
const express = require("express");
const router = express.Router();
const Workout = require("../Models/workoutModels.js");
// ? Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});
// ? Get a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// * POST a new workout
router.post("/", async (req, res) => {
  const { title, resp, arr, load } = req.body;
  console.log(title, resp, arr);
  try {
    const workout = await Workout.create({ title, resp, arr, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
  //   res.json({ mssg: "POST a new workout" });
});
// ! DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

// ? Update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});
module.exports = router;
