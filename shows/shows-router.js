const express = require("express");

const Shows = require("./shows-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Shows.findShow()
    .then((shows) => {
      res.json(shows);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving shows" });
    });
});

module.exports = router;
