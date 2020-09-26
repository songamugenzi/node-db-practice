const express = require("express");

const ShowsRouter = require("./shows/shows-router.js");

const server = express();

server.use(express.json());
server.use("/api/shows", ShowsRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
