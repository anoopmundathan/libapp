var app = app || {};

// Create View

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});