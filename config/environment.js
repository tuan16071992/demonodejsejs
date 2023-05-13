const express = require("express");
const ejs = require("ejs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = function (app) {
  //Cors
  app.use(cors());

  //View Engine
  var optionsStatic = {
    dotfiles: "ignore",
    etag: false,
    // extensions: ['htm', 'html'],
    // index: false,
    maxAge: "365d",
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set("x-timestamp", Date.now());
    },
  };
  app.use(express.static(path.join(__dirname, "./public/"), optionsStatic));
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "./../views"));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
