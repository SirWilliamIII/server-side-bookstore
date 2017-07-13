var express = require('express');
var router = express.Router();
const bookRoutes = require('../db/queries/books');

// var expressJWT = require('express-jwt');
// var auth = expressJWT({secret: process.env.SECRET, userProperty: 'payload'});

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

//
// router.get('/books', function(req, res, next) {
// 		book.getAllBooks().then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });
//
// router.post('/books', function(req, res, next) {
// 		var newBook = req.body;
//
// 		book.addBook(newBook).then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });
//
// router.get('/books/authors', function(req, res, next) {
// 		book.getBooksWithAuthors().then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });
//
// router.put('/books/:id', function(req, res, next) {
// 		var bookId = req.params.id;
// 		var bookModel = req.body;
//
// 		book.updateBook(bookId, bookModel).then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });
//
// router.delete('/books/:id', function(req, res, next) {
// 		var bookId = req.params.id;
//
// 		book.removeBook(bookId).then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });
//
// router.get('/book/:id/author', function(req, res, next) {
// 		var bookId = req.params.id;
//
// 		book.getBooksWithAuthorsById(bookId).then(function(data) {
// 				res.json(data);
// 		}).catch(function(err) {
// 				next(err);
// 		});
// });

module.exports = router;
