const knex = require('../knex');

module.exports = {
		getAllAuthors: () => {
				return knex('authors')
						.orderBy('id');
		},
		deleteAuthorById: id => {
				return knex('books')
						.where('id', id).del();
		},
		addAuthor: author => {
				const newAuthor = {
						first: author.title,
						last: author.last,
						biography: author.biography,
						portrait_url: author.portrait_url
				}
				return knex('authors')
						.insert({
								first: newAuthor.first,
								last: newAuthor.last,
								biography: newAuthor.biography,
								portrait_url: newAuthor.portrait_url
						})
						.then(res => {
								const queryArr = [];
								if (books.length == !NaN)
										books.forEach(book => {
												const bookId = books[book].id
												const query = knex('author_book')
														.insert({
																book_id: bookId,
																author_id: res[0]
														})
												queryArr.push(query)
										})
						})
		},
		getJoinAuthorId: () => {
				return knex.table('authors')
						.innerJoin('books', 'authors.id', '=', 'books.author_id')

		}
}

