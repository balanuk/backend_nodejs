//example file of front-end part to familiarize with browserify tool
var $ = require('jquery');

$(document).ready(function(){
	var button = $('<button/>').html('Click me dude').on('click', function(){ alert('Hey dude, you are clicked me :)!') });
	$('body').append(button);
});