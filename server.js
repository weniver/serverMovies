require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//CORS
var corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

//Routes
app.get("/", (req, res) => {
  console.log("hola");
  res.json({ user: "Diego", email: "perro@loco.com" });
});
app.get("/movies", (req, res) => {
  res.status(200).json([
    {id:1,
      titulo: "Peli1",
      director: "Fulano",
      pais: "lugar",
      año: 2020,
      rating: 5,
      fecha: "23/10/2020",
    },
    {id:2,
      titulo: "Peli1",
      director: "Fulano",
      pais: "lugar",
      año: 2020,
      rating: 5,
      fecha: "23/10/2020",
    },
    {id:3,
      titulo: "Peli1",
      director: "Fulano",
      pais: "lugar",
      año: 2020,
      rating: 5,
      fecha: "23/10/2020",
    },
  ]);
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${
      PORT === 3000 ? "http://localhost:3000" : PORT
    }`
  );
});
