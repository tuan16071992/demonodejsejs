const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("trangchu.ejs", {
    title: "Trang chủ",
    message: "Chào mừng đến với ứng dụng của chúng tôi!",
  });
});

router.get("/about", (req, res) => {
  res.render("about.ejs", { title: "Về cghungs tôi", message: "ok 3 con dê" });
});

module.exports = router;

