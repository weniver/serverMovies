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
    res.status(200).send(savedMovie);
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});
router.get("/movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});

module.exports = router;
