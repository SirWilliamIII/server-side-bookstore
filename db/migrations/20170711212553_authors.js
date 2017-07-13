exports.up = function(knex, Promise) {
		return knex.schema.createTable('authors', table => {
				table.increments();
				table.string('first');
				table.string('last');
				table.text('biography');
				table.string('portrait_url');
				table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
				table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
		});
};

exports.down = function(knex, Promise) {
		return knex.schema.dropTable('authors');
};
