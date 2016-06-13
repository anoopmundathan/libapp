var app = app || {};
<<<<<<< HEAD
$(document).ready(function() {
	var bookList = [
	{
		title:'JavaScript Good Parts',
		author: 'Cockford'
	},
	{
		title: 'Backbone.js',
		author: 'Addyosmani'
	},
	{
		title: 'Angular.js',
		author: 'Paul'
	}

	];
	new app.LibraryView(bookList);
=======

$(function() {
    var books = [
        { coverImage: 'img/placeholder.png', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
        { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
        { title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
        { title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
        { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
    ];

    new app.LibraryView( books );
>>>>>>> master
});