const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 8000;
const hostname = '127.0.0.0';
const Sequelize = require('sequelize');

//const sequelize = new Sequelize('mysql://parfait:parfait:80/advance_db');

const sequelize = new Sequelize('nodejs_db', 'parfait', 'parfait', {
  host: 'localhost',
  dialect: 'mysql',
});

//try to connect to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

//try to create table
const Book = sequelize.define('books', {
  note: Sequelize.TEXT,
  tag: Sequelize.STRING,
  author: Sequelize.STRING,
});

//post new book
app.post('/book', function (req, res) {
  Book.create({
    note: req.body.note,
    tag: req.body.tag,
    author: req.body.autor,
  }).then((book) => {
    res.json(book);
  });
});
sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log('Database and table created');

    Book.bulkCreate([
      {
        note: 'This is first created book',
        tag: 'tag-first-book',
        author: 'Parfait ah',
      },
      {
        note: 'This is second created book',
        tag: 'tag-second-book',
        author: 'Leonel ah',
      },
      {
        note: 'This is third created book',
        tag: 'tag-third-book',
        author: 'OLivier ah',
      },
    ])
      .then(function () {
        return Book.findAll();
      })
      .then(function (notes) {
        console.log(notes);
      });
  });

//home route
app.get('/home', function (req, res) {
  res.send('welcome on home application');
});

//display all book
app.get('/books', function (req, res) {
  Book.findAll().then((books) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.json(books);
  });
});

//display specifiq book
app.get('/book/:id', function (req, res) {
  Book.findAll({ where: { id: req.params.id } }).then((books) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.json(books);
  });
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
