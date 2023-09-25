const http = require('http');
const hostname = '127.0.0.0';
const port = '8000';

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'parfait',
  password: 'parfait',
  database: 'mydb',
});

con.connect(function (error) {
  if (error) throw error;
  console.log('Connected !');
  //Create database
  //   con.query('CREATE DATABASE mydb', function (error, result) {
  //     if (error) throw error;
  //     console.log('DATABASE CREATED');
  //   });

  //create table
  //   con.query(
  //     'CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY,name varchar(225), adress varchar(255))',
  //     function (error, result) {
  //       if (error) throw error;
  //       console.log('Table created with success');
  //     }
  //   );

  //insert data
  //   const sql =
  //     'INSERT INTO customers(name, adress) values("John Doe","Cotonou, Bénin")';
  //   con.query(sql, function (error, result) {
  //     if (error) throw error;
  //     console.log('Insertion work with success');
  //   });

  //retrieve data
  //   const sql = 'SELECT * FROM customers';
  //   con.query(sql, function (error, result) {
  //     if (error) throw error;
  //     console.log(result);
  //   });

  //   const sql = 'SELECT * FROM customers WHERE name="Tony"';
  //   con.query(sql, function (error, result) {
  //     if (error) throw error;
  //     console.log(result);
  //   });

  //   const sql = 'SELECT * FROM customers ORDER BY name';
  //   con.query(sql, function (error, result) {
  //     if (error) throw error;
  //     console.log(result);
  //   });
  //update data
  const sql =
    'UPDATE customers SET adress="Porto-Novo,Bénin" WHERE name="Tony"';
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log(result);
  });
});
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
