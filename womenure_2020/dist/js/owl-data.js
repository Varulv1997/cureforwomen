/*Owl Init*/
jQuery(document).ready(function($) {
	"use strict";
	
	/*owl carousel*/
	$("#owl_demo_1").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 1, 
	});
	$('#owl_demo_2').owlCarousel({
		margin:20,
		nav:true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			800:{
				items:4
			},
			
		}
	});
	$('#owl_demo_3').owlCarousel({
		margin:20,
		nav:true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			800:{
				items:3
			},
		}
	});

	// Week Carousel Start
	$('.week-carousel').owlCarousel({
		margin:0,
		nav:true,
		dots: false,
		autoplay:true,
		responsive:{
			0:{
				items:2
			},
			480:{
				items:2
			},
			800:{
				items:3
			},
			1200:{
				items:7
			},
		}
	});

	$(".week-carousel .owl-prev").html('<i class="fa fa-chevron-left"></i>');
	$(".week-carousel .owl-next").html('<i class="fa fa-chevron-right"></i>');
	// Week Carousel End

	// Main Carousel Start
	$(".main-carousel").owlCarousel({
		navigation : false, // Show next and prev buttons
		// slideSpeed : 300,
		// paginationSpeed : 400,
		items : 1,
		loop:true,
		autoplay:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
	// Main Carousel End
});