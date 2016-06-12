var app = app || {};

// Create a Book Model
app.Book = Backbone.Model.extend({
	defaults: {
		title: 'JavaScript',
		author: 'Addy'
	}
});