var app = app || {};
$(document).ready(function() {
	var bookList = [
	{
		coverImage: 'img/placeholder.png',
		title:'JavaScript Good Parts',
		author: 'Cockford'
	},
	{
		coverImage: 'img/placeholder.png',
		title: 'Backbone.js',
		author: 'Addyosmani'
	},
	{
		coverImage: 'img/placeholder.png',
		title: 'Angular.js',
		author: 'Paul'
	}, 

	{
		coverImage: 'img/placeholder.png',
		title: 'Backbone',
		author: 'Addy',
		releaseDate: 'Unknown',
		keywords: 'Unknown'
	},

	{
		coverImage: 'img/placeholder.png',
		title: 'Backbone',
		author: 'Anoop',
		releaseDate: 'Unknown',
		keywords: 'Unknown'
	}

	];
	new app.LibraryView(bookList);
	
});