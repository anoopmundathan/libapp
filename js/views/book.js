var app = app || {};

// Create View

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),

	events: {
		'click .delete': 'deleteBook'
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	deleteBook: function() {
		this.model.destroy();
		this.remove();
	}
});