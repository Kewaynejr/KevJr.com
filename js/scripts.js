var aboutContainer		= 	$('.about .container');
var $portfolioHeading	= 	$('.portfolio h2');
var $portfolioImage		=	$('.project-image');
var $portfolioDetails	=	$('.project-details');
var $facebookIcon		=	$('.facebook-icon');
var $twitterIcon		=	$('.twitter-icon');
var $instagramIcon		=	$('.instagram-icon');

$( document ).ready(function(){

	// About Container Animations
	// =================================================== //

	$(aboutContainer).css({'opacity':0}, function(){
		console.log("aboutContainer Opacity 0");
	}).animate({'opacity':1}, 1200, function(){
		console.log("aboutContainer Faded In");
	});

	// =================================================== //

	// Portfolio Hide
	// =================================================== //
	$portfolioHeading.css({'opacity':0}, function(){
		console.log("Hid Portfolio Heading");
	});

	$portfolioImage.css({'opacity': 0}, function(){
		console.log("Hid Portfolio Image");
	});

	$portfolioDetails.css({'opacity': 0}, function(){
		console.log("Hid Portfolio Image");
	});
	// =================================================== //

	// Waypoints
	// =================================================== //
	$portfolioHeading.waypoint(function(){
		console.log('Waypoint');
		$portfolioHeading.animate({'opacity': 1}, 1000, function(){
			console.log('Full Opacity portfolioHeading');
		})
	}, {offset:'80%'});

	$portfolioImage.each(function() {
		var self = $(this);

		$(this).waypoint(function() {
			self.animate({'opacity': 1}, 1000)
		}, {offset: '80%'});
	});

	$portfolioDetails.each(function() {
		var self = $(this);

		$(this).waypoint(function() {
			self.animate({'opacity': 1}, 1000)
		}, {offset: '80%'});
	});
	// =================================================== //

	// $facebookIcon.hover(function(){
	// 	$(this).css('cursor', 'pointer');
	// 	$(this).toggle({
	// 		effect: 'scale',
	// 		percent: '20%'
	// 	}, 200);
	// });

});
