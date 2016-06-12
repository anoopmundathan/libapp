var app = app || {};

// Create Collection

app.Library = Backbone.Collection.extend({
	model: app.Book
});