var express = require('express');
var router = express.Router();
const bookRoutes = require('../../queries/books');

router.get('/books', (req, res) => {
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

router.get('/books/authors', function(req, res, next) {
		book.getBooksWithAuthors().then(function (data) {
				res.json(data);
		}).catch(function (err) {
				next(err);
		})
})

router.delete('/books/:id', (req, res) => {
		bookRoutes.deleteBookById(req.params.id)
				.then(data => {
						res.json(data);
				}).catch(err => {
						next(err);
				})
});


module.exports = router;
