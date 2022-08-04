const mongoose = require("mongoose");
// connect to the database and naming the data base.
const connectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
// create the model
const Products = mongoose.model("Products", connectSchema);
module.exports = Products;
