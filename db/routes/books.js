var express = require('express');
var router = express.Router();
const bookRoutes = require('../../queries/books');

router.get('/books', (req, res) => {
		bookRoutes.getAllBooks()
				.then(book => {
						res.json(book)
				})
				.catch(err => {
						next(err)
				})
});

router.delete('/books/:id', (req, res) => {
		bookRoutes.deleteBook(req.params.id)
				.then(book => {
						res.json(book);
				}).catch(err => {
						next(err);
				})
})

router.post('/books', (req, res, next) => {
		const newBook = req.body;
		bookRoutes.addBook(newBook)
				.then(book => {
						res.json(book);
				})
				.catch(err => {
						next(err);
				})
})

module.exports = router;
