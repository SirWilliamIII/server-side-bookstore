const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('books')
      .select()
      .then(books => {
        res.render('all', { books: 'books'});
      });
});

module.exports = router;
