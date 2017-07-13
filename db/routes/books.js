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

router.delete('/books/:id', (req, res) => {
		bookRoutes.deleteBookByParamId(req.params.id)
				.then(data => {
						res.json(data);
				}).catch(err => {
						next(err);
				})
});

module.exports = router;
