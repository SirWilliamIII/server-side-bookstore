exports.seed = function(knex, Promise) {
		return knex('books').del()
        .then(() => {
						return Promise.all([
								knex('books').insert({
                    title:        "Python In A Nutshell",
										description:  "This book offers Python programmers one place to look when they need help remembering syntax. Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
										book_img_url: "s3-us-west-2.amazonaws.com",
										author_names: 'Alex Martelli, Anna Ravenscroft, Steve Holden',
										genre:        "Python"
								}),

								knex('books').insert({
										title:        "Think Python",
										genre:        "Python",
										description:  "Working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, recursion, data structures, and object-oriented design.",
										book_img_url:          "s3-us-west-2.amazonaws.com",
										author_names: "Allen B. Downey",
								}),

								knex('books').insert({
										title:        "Learning React Native",
										genre:        "JavaScript",
										description:  "React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. You’ll also discover how to access platform features such as the camera, user location, and local storage.",
										book_img_url:          "s3-us-west-2.amazonaws.com",
										author_names: "Bonnie Eisenman",
								}),

								knex('books').insert({
										title:        "You Don't Know JS: ES6 & Beyond",
										description:  "odds are you don’t fully understand the language.  ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
										book_img_url: "s3-us-west-2.amazonaws.com/",
										author_names: "Kyle Simpson",
										genre:        "JavaScript"
								}),

								knex('books').insert({
										title:        "You Don't Know JS: Scope & Closures",
										description:  "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. You’ll learn how and why they work,.",
										book_img_url: "s3-us-west-2.amazonaws.com",
										author_names: "Kyle Simpson",
										genre:        "JavaScript"
								}),

								knex('books').insert({
										title:       "You Don 't Know JS: Async & Performance",
										description: "Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.",
										book_img_url:         "s3-us-west-2.amazonaws.com",
										author_names:  "Kyle Simpson",
										genre:         "JavaScript"
								})
						])
						return knex('books');
				})
}
