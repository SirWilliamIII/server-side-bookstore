const express = require('express');
const router = express.Router();
const authorRoutes = require('../db/queries/authors');

//var expressJWT = require('express-jwt');
//var auth = expressJWT({secret: process.env.SECRET, userProperty: 'payload'});

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

// router.get('/authors/books', function(req, res, next) {
// 		author.getAuthorsWithBooks().then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });
//
router.get('/author/:id/book', function(req, res, next) {
		var authorId = req.params.id;

		author.getJoinAuthorId(authorId).then(function(data) {
				res.json(data);
		}).catch(function(err) {
				next(err);
		});
});
//
// router.put('/authors/:id', function(req, res, next) {
// 		var authorId = req.params.id;
// 		var authorModel = req.body;
//
// 		author.updateAuthor(authorId, authorModel).then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });
//
// router.delete('/authors/:id', function(req, res, next) {
// 		var authorId = req.params.id;
//
// 		author.removeAuthor(authorId).then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });


module.exports = router;
