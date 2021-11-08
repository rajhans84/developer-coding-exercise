const express = require("express");
const fs = require("fs");
const path = require("path");
const dir = require("node-dir");
const cors = require("cors");

const { getData } = require("./utils/post");
const { getTopWords } = require("./utils/tags");

const app = express();
const rootPostDir = path.join(__dirname, "../assets/posts");

app.use(
  cors({
    origin: "*",
  })
);

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get("/post/:slug", function (req, res, next) {
  const file = path.join(rootPostDir, `${req.params.slug}.md`);
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      res.status(403).json({ error: "Not found" });
    } else {
      res.send({
        post: getData(data),
      });
    }
  });
});

/**
 * Returns a json array of all posts, formatted as:
 * [
 *  {
 *    title: <article's title>,
 *    slug: <article's slug>
 *  },
 *  ...
 * ]
 */
app.get("/posts", function (req, res) {
  let response = [];
  dir.readFiles(
    rootPostDir,
    function (err, content, next) {
      if (err) throw err;
      response.push(getData(content));
      next();
    },
    function (err, files) {
      if (err) throw err;
      res.send(response);
    }
  );
});

app.listen(3000, function () {
  console.log("Dev app listening on port 3000!");
});
