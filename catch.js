$(function() {
	// Define the window dimensions
	var width  = ($(window).width() - 136),
		height = ($(window).height() - 22);
	
	// Initial position of th <p>
	var p = $('#target').offset();
	p.top = 100;
	p.left = 100;
	$('#target').offset(p);
	
	// Random positioning during a hover on the <p>
	$('#target').hover(function() {
		var x = Math.floor(Math.random() * width),
			y = Math.floor(Math.random() * height);
		
		var p = $('#target').offset();
		p.left = x;
		p.top = y;
		$('#target').offset(p);
	});
});