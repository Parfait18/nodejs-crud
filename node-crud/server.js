const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const hostname = "localhost";
const port = 8080;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs_db", "parfait", "parfait", {
  host: "localhost",
  dialect: "mysql",
});

const Book = sequelize.define("books", {
  title: Sequelize.TEXT,
  tag: Sequelize.STRING,
  description: Sequelize.TEXT,
});

const Author = sequelize.define("authors", {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
});

Author.hasMany(Book, { as: "books" });
Book.belongsTo(Author, { foreighKey: "author_id", as: "author" });

sequelize.authenticate().then(() => {
  console.log("Connection estabilshed successfully");
}).catch((error) => {
  console.log(`Error occures for connection to database ${error}`);
});

app.get("/", function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("welcome in nodejs crud API");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
