const knex = require('../db/knex');

module.exports = {
	getAllBooks: () => {
			return knex('books')
					.orderBy('id');
	},
	addBook: book => {
			const newBook = {
					title: book.title,
					genre: book.genre,
					book_img_url: book.book_img_url,
					author_names: book.author_names
			}
			return knex('books')
					.insert(newBook)
	},
	deleteBook: id => {
			return knex('books')
					.where('id', id).del();
	}
}
