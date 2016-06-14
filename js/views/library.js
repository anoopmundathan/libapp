// site/js/views/library.js

var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    events: {
        'click #add': 'addBook'
    },

    initialize: function( initialBooks ) {
        this.collection = new app.Library( initialBooks );
        this.render();
        this.listenTo(this.collection, 'add', this.renderBook);
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },

    // Add book
    addBook: function(e) {
        e.preventDefault();

        var formData = {};

        // Iterate over all the input elements
        $('#addBook').children('input').each(function(i, el) {
         
            if ($(el).val() !== '')
            {
                formData[el.id] = $(el).val();
            }
        });

        this.collection.add(formData);
        //this.collection.add(new app.Book(formData));
    }
});