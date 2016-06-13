var app = app || {};

// Individual Book View
app.BookView = Backbone.View.extend({
	tagName: "div",
	className: "book-container",
	template: _.template($('#booktemplate').html()),
	render: function() {

		this.$el.html(this.template(this.model.attributes));
		/*this.$el.html('<div>' + this.model.attributes.title + "=" + 
			this.model.attributes.author +
			'</div>');*/
		//console.log(this.model.attributes);
		return this;
	}
});

// Main View
app.LibraryView = Backbone.View.extend({

	el: "#book",

	events: {
		"click #addButton": "addBook"
	},

	initialize: function(list) {
		this.collection = new app.Library(list);
		this.render();
		this.listenTo(this.collection,'add',this.renderBook);
	},

	render: function() {
		this.collection.each(function( item ) {
			this.renderBook(item);
		}, this);
	},

	// Render each Book
	renderBook: function(item) {
		console.log(arguments);
		var bookView = new app.BookView({
			model: item
		})
		$(this.el).append(bookView.render().el);
	},

	addBook: function(e) {
		e.preventDefault();
		var formData = {};
		$('#addBook').children('input').each(function(i, el) {
			formData[el.id] = this.value;
		});
		this.collection.add(new app.Book(formData));
	}
});