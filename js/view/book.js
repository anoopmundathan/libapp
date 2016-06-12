var app = app || {};

// Individual Book View
app.BookView = Backbone.View.extend({
	tagName: "div",
	className: "book-container",
	render: function() {
		console.log('this is BookView Render');
	}
});

// Main View
app.LibraryView = Backbone.View.extend({
	tagName: "#book",
	initialize: function() {
		console.log('LibraryView initialize');
	},
	render: function() {
		console.log('LibraryView render');
	}
});