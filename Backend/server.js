// * packages
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// ! files
const workoutRoutes = require("./Routes/workout.js");
// ? express app
const app = express();

//! middleware
app.use((req, res, next) => {
  next();
});
// ! routes
// app.get("/", (req, res) => {
//   res.send({ mssg: "My first App" });
// });

app.use("/api/workout", workoutRoutes);

// * Connect to MongoDB

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    // ? listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
