const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ user: "Diego", email: "perro@loco.com" });
});
router.get("/movies", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "Pelicula sin nombre",
      director: "Diego Bailador",
      country: "JAPON",
      year: 2020,
      rating: 3,
      poster:"https://m.media-amazon.com/images/M/MV5BZWFkN2ZhODAtYTNkZS00Y2NjLWIzNDYtNzJjNDNlMzAyNTIyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg",
      fecha: new Date(),
    },
    {
      id: 2,
      title: "Pelicula sin nombre",
      director: "Diego Bailador",
      country: "USA",
      year: 1986,
      rating: 0,
      poster:"https://m.media-amazon.com/images/M/MV5BZWFkN2ZhODAtYTNkZS00Y2NjLWIzNDYtNzJjNDNlMzAyNTIyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg",
      fecha: new Date(),
    },
    {
      id: 3,
      title: "Pelicula sin nombre",
      director: "Diego Bailador",
      country: "lugar",
      year: 1999,
      rating: 1,
      poster:"https://m.media-amazon.com/images/M/MV5BZWFkN2ZhODAtYTNkZS00Y2NjLWIzNDYtNzJjNDNlMzAyNTIyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg",
      fecha: new Date(),
    },
  ]);
});

module.exports = router;
