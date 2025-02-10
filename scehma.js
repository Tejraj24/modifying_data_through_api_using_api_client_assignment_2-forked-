const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true, min: 0 }
});

const MenuItem = mongoose.model("MenuItem", schema);

module.exports = MenuItem;