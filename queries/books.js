const knex = require('../db/knex');

module.exports = {
		addBook: book => {
				const newBook = {
						title:        book.title,
						description:  book.description,
						book_img_url: book.book_img_url,
						author_names: book.author_names,
						genre:        book.genre
				}
				return knex('books')
						.insert(newBook)
		},
		getAllBooks: () => {
				return knex('books')
						.orderBy('id');
		},
		deleteBookByParamId: id => {
				return knex('books')
						.where('id', id).del();
		}
}
