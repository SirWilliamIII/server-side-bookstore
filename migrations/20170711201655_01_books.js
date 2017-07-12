exports.up = (knex, Promise) => {
		return knex.schema.createTable('books', table => {
				table.increments();
				table.string('title');
				table.text('description');
				table.string('book_img_url');
				table.text('author_names');
				table.string('genre');
				table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
				table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
		});
};

exports.down = function(knex, Promise) {
		return knex.schema.dropTable('books');
};
