// * packages
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// ? express app
const app = express();

//! middleware
app.use((req, res, next) => {
  next();
});
// ! routes
app.get("/", (req, res) => {
  res.send({ mssg: "My first App" });
});

// ? listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
