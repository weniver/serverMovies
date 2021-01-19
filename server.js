require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

//CORS
var corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors());

// Serve static files
app.use(
  express.static(path.join("..", __dirname, "clientMovies", "build"))
);

//Routes
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

// Redirect back to index.html if urls do not match
app.get("*", (req, res) => {
  res.sendFile(path.join("..", __dirname, "clientMovies/build", "index.html"));
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
