var app = app || {};

// Create Model 

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.jpg',
		title: 'Backbone',
		author: 'Addy',
		releaseDate: 'Unknown',
		keywords: 'Unknown'
	}
});