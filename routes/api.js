const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ user: "Diego", email: "perro@loco.com" });
});
router.get("/movies", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      titulo: "Peli1",
      director: "Fulano",
      pais: "lugar",
      año: 2020,
      rating: 5,
      fecha: "23/10/2020",
    },
    {
      id: 2,
      titulo: "Peli1",
      director: "Fulano",
      pais: "lugar",
      año: 2020,
      rating: 5,
      fecha: "23/10/2020",
    },
    {
      id: 3,
      titulo: "Peli1",
      director: "Fulano",
      pais: "lugar",
      año: 2020,
      rating: 5,
      fecha: "23/10/2020",
    },
  ]);
});

module.exports = router;
