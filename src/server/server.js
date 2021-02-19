const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8000;
const table ='users';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
});



app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
  pool.query(`select * from ${table}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.get('/api/books', (req, res) => {
    pool.query(`select * from books`, (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.get('/api/books/:id', (req, res) => {
      console.log(req.params)
      let id = req.params.id;
    pool.query(`select * from books where id = ${id}`, (err, rows) => {
      if (err) {
          console.log(err)
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.get('/api/reviews/:id', (req, res) => {
    console.log(req.params)
    let id = req.params.id;
  pool.query(`select * from reviews where book_id = ${id}`, (err, rows) => {
    if (err) {
        console.log(err)
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});