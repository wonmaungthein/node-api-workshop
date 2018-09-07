const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.json());

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg    ",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg   ",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];

app.get("/", function(req, res) {
  res.send("Hello what is your name");
});

app.get("/home", function(req, res) {
  res.send("This is my home page, home route");
});

app.get("/students", function(req, res) {
  res.send("There are five students in the class");
});

app.get("/albums/", function(req, res) {
  res.send(albumsData);
});

app.get("/album/:albumId", function(req, res) {
  res.send("Success");
  res.send(albumsData.find(result => result.albumId == req.params.albumId));
});

app.post("/postAlbum", function(req, res) {
  albumsData.push(req.body);
  res.send(albumsData);
  res.send("success");
});

app.get("/myProject", function(req, res) {
  res.send("This is my project page. I am going to work on my project");
});

app.listen(3000, function() {
  console.log("Server is listening port 3000");
});
