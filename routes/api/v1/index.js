const express = require("express");
const router = express.Router();
// routing ot the product
router.use("/products", require("./products"));
module.exports = router;
