var express = require('express');
var router = express.Router();
const bookRoutes = require('../db/queries/books');

router.get('/books', (req, res, next) => {
		bookRoutes.getAllBooks()
				.then(data => {
						res.json(data)
				})
				.catch(err => {
						next(err)
				})
});

router.post('/books', (req, res, next) => {
		const newBook = req.body;
		bookRoutes.addBook(newBook)
				.then(data => {
						res.json(data);
				})
				.catch(err => {
						next(err);
				})
});

router.delete('/books/:id', (req, res, next) => {
		bookRoutes.deleteBookById(req.params.id)
				.then(data => {
						res.json(data);
				}).catch(err => {
						next(err);
				})
});

module.exports = router;
