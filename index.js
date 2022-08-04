const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
let app = express();
const env = require("./config/environment");
const port = env.PORT || 8000;
//body parser to parse the post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookie parser to get and set cookie
// app.use(express.urlencoded);
app.use(cookieParser());
// connecting the router
app.use(logger(env.morgan.mode, env.morgan.options));
app.use("/", require("./routes/index"));
app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log(`server started at port: ${port}`);
});
