exports.seed = function(knex, Promise) {
		// Deletes ALL existing entries
		return knex('authors').del()
				.then(function() {
						return Promise.all([
								// Inserts seed entries
								knex('authors').insert({
										first: 'Alex',
										last: 'Martelli',
										biography: 'Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends.',
										portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg'
								}),
								knex('authors').insert({
										first: 'Anna',
										last: 'Ravenscroft',
										biography: 'Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books,',
										portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg'
								}),
								knex('authors').insert({
										first: 'Steve',
										last: 'Holden',
										biography: 'Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. "Intermediate Python video series.',
										portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg'
								}),
								knex('authors').insert({
										first: 'Allen B.',
										last: 'Downey',
										biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
										portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
								}),
								knex('authors').insert({
										first: 'Bonnie',
										last: 'Eisenman',
										biography: 'Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos.',
										portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'
								}),
								knex('authors').insert({
										first: 'Kyle',
										last: 'Simpson',
										biography: 'Kyle Simpson is an Open Web Evangelist who\'s passionate about all things JavaScript. He\'s an author, workshop trainer, tech speaker, and OSS contributor/leader.',
										portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg'
								}),
						]);
				});
};