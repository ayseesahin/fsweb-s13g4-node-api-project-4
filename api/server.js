const express = require("express");
const cors = require("cors");
const server = express();
const router = require("./users/users-router");

server.use(express.json());
server.use(cors());
server.use("/api", router);

server.get("/", (req, res) => {
  res.json({ message: "express is working" });
});

module.exports = server;
