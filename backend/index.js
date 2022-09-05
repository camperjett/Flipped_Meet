const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.ORIGIN || "*",
  },
});
app.use(cors({
    origin: '*'
}));
const users = {};

const PORT = process.env.PORT || 5000;

const socketToRoom = {};

