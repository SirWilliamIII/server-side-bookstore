const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

router.get('/book', (req, res) => {
  knex('books')
      .select()
      .then(books => {
        res.json({
            message: books
        })
      });
});

router.get('/all', (req, res) => {
  res.render('all');
})

module.exports = router;
