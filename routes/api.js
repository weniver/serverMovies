const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

//Middlewares
const getMovie = async (req, res, next) => {
  let movie;
  try {
    movie = await Movie.findById(req.params.id);
    if (movie === null) {
      return res.status(404).json({ message: "Movie not found." });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
  res.movie = movie;
  next();
};

router.post("/add/movie", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).send(savedMovie);
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movieData = await Movie.find().sort({ watchedOn: "descending" });
    const count = await Movie.find().countDocuments();
    res.json({ movieData, count });
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});

router.get("/movie/:id", getMovie, (req, res) => {
  res.status(200).json(res.movie);
});

router.delete("/movie/:id", async (req, res) => {
  try {
    let deleteMovie = await Movie.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteMovie);
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});

router.patch("/movie/:id", async (req, res) => {
  try {
    let updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(updatedMovie);
    res.status(200).json(updatedMovie);
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});

module.exports = router;
