const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  watchedOn: { type: Date, required: true },
  title: { type: String, required: true },
  country: { type: String },
  year: { type: String },
  director: { type: String },
  rating: { type: Number, default: 0 },
  poster: { type: String },
  imdbID: { type: String },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Movie", MovieSchema);
