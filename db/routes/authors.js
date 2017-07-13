var express = require('express');
var router = express.Router();



module.exports = router;
var express = require('express');
var router = express.Router();
const authorRoutes = require('../../queries/authors');

router.get('/authors', (req, res) => {
		authorRoutes.getAllAuthors()
				.then(data => {
						res.json(data)
				})
				.catch(err => {
						next(err)
				})
});

router.post('/authors', (req, res, next) => {
		const newAuthor = req.body;
		bookRoutes.addBook(newAuthor)
				.then(data => {
						res.json(data);
				})
				.catch(err => {
						next(err);
				})
});

router.delete('/authors/:id', (req, res) => {
		bookRoutes.deleteAuthorById(req.params.id)
				.then(data => {
						res.json(data);
				}).catch(err => {
				next(err);
		})
});

module.exports = router;
