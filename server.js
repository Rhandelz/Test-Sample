const express = require("express");
const app = express();
/* const crypto = require("crypto");
const mongoose = require("mongoose"); */
/* const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream") */ const methodOverride = require("method-override");
/* const bodyParser = require("body-parser"); */
const connectDb = require("./db/connect");
const cors = require("cors");

const PORT = 3500;

app.use("/img", express.static("img"));

/* MIDDLEWARE */
app.use(express.json());
/* app.use(bodyParser.json()); */
app.use(methodOverride("_method"));
app.use(cors());

/* app.set("view engine", "ejs"); */

app.use("/file", require("./routes/fileRoute"));

connectDb();

app.listen(PORT, () => {
  console.log(`Connected to Host ${PORT}`);
});
