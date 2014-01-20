$(document).ready(function(){


	// Hover options
	$('.options').mouseenter(function(){

		$(this).css('background-color','white');
		$(this).css('color','#FF7F00');
		$(this).css('font-weight','bold');

	});

	$('.options').mouseleave(function(){

		$(this).css('background-color','#FF7F00');
		$(this).css('color','white');
		$(this).css('font-weight','normal');
	});

});