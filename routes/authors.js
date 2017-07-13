const express = require('express');
const router = express.Router();
const authorRoutes = require('../db/queries/authors');

router.get('/authors', (req, res) => {
		authorRoutes.getAllAuthors()
				.then(data => {
						console.log(data)
						res.json(data)
				})
				.catch(err => {
						next(err)
				})
});

router.post('/authors', (req, res, next) => {
		const newAuthor = req.body;
		authorRoutes.addAuthor(newAuthor)
				.then(data => {
						res.json(data);
				})
				.catch(err => {
						next(err);
				})
});

router.delete('/authors/:id', (req, res, next) => {
		authorRoutes.deleteAuthorById(req.params.id)
				.then(data => {
						res.json(data);
				}).catch(err => {
				next(err);
		})
});

module.exports = router;
