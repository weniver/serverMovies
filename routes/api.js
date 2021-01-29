const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res) => {
  res.json({ user: "Diego", email: "perro@loco.com" });
});

router.post("/add/movie", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(200).send("vengo del server signup");
  } catch (e) {
    console.log(e);
    res.send("error");
  }
});
router.get("/movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (e) {
    console.log(e);
    res.send("error");
  }
});

module.exports = router;
