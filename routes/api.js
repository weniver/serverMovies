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

router.get("/", (req, res) => {
  res.json({ user: "Diego", email: "perro@loco.com" });
});

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
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});

router.get("/movie/:id", getMovie, (req, res) => {
  res.status(200).json(res.movie);
});

router.delete("/movie/:id", async (req, res) => {
try {
  Post.deleteOne({ _id: req.params.postId })
} catch (e) {

} finally {

}
});



module.exports = router;
