const express = require("express");
var path = require("path");
const app = express();
const multer = require("multer");
const upload = multer({
  dest: "uploads/", // this saves your file into a directory called "uploads"
});

const PORT = process.env.PORT || 8080;
const DATETIME = process.env.DATETIME;
const USERNAME = process.env.USERNAME;
const testA = process.env.TESTA;
const testB = process.env.TESTB;

app.get("/dockerfile", (req, res) => {
  res.header("Content-Type", "Dockerfile"); // withput contenttype the file will be opened
  res.sendFile(__dirname + "/Dockerfile");
});

app.get("/creation", (req, res) => {
  res.send("Docker Image Created at: " + DATETIME);
});
app.get("/dynamic", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({
    "user name": USERNAME,
    "ENV varibleA": testA,
    "ENV varibleB": testB,
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/put", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});
app.post("/upload-file", async (req, res) => {
  console.log(req.files.Store);
  /* try {
    if (!req.files.Store) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let avatar = req.files.avatar;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      avatar.mv("./uploads/" + avatar.name);

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: avatar.name,
          mimetype: avatar.mimetype,
          size: avatar.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }*/
});

app.listen(PORT, () => {
  console.log(`Server is listening on Internal port ${PORT}`);
});
