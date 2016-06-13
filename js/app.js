var app = app || {};
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
});