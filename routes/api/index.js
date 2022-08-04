const express = require("express");
const router = express.Router();
// routeing to the version of the api
router.use("/v1", require("./v1"));
module.exports = router;
