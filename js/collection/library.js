var app = app || {};

// Create a Collection
app.Library = Backbone.Collection.extend({
	model: app.Book
});