const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");// used for crud operations, basically user ke stored cookies ko access kar sakta hun and then unko set bhi kar sakta hun

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
); // this is the configuration for form data(application/json or multipart form-data)

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

module.exports = app;
