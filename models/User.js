const mongoose = require("mongoose");

const UsserSchema = mongoose.Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, required: true },
  country: { type: String },
  year: { type: String },
  director: { type: String },
  rating: { type: Number, default: 0 },
  poster: { type: String },
  imdbID: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Usser", UsserSchema);
