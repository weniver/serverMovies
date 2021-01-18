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

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);
// View Engine to convert views into html
// app.set("view engine","ejs") you need a folder views
//MIDDLEWARES
//you can use also express.json() as middleware to parse json in the boyd



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port http://localhost:${PORT}`
  );
});
