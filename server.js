require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
var methodOverride = require('method-override')


const app = express();

//CORS
var corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors());

app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

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
//Conect to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (e) => {
    if(e) console.log(e)
    console.log("Connected to database");
  }
);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
