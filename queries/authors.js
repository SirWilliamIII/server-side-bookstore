const knex = require('../db/knex');

module.exports = {
		addAuthor: author => {
				const newAuthor = {
						first:        author.title,
						last:  author.last,
						biography: author.biography,
						portrait_url: author.portrait_url
				}
				return knex('authors')
						.insert(newAuthor)
		},
		getAllAuthors: () => {
				return knex('authors')
						.orderBy('id');
		},
		deleteAuthorById: id => {
				return knex('books')
						.where('id', id).del();
		}
}
