// doctor cunsultation page slidetoggle button js
$(document).ready(function(){
  $(".specialities_toggle_btn").click(function(){
    $(".specialities_toggle_menu").slideToggle();
  });
  $(".search_icon_box a").click(function(){
  	$(".search_content").toggleClass("open_search");
  });
});
// My Appointment calendar js
 $(document).ready(function() {
 	$('#calendar').fullCalendar({
 		editable: true,
 		eventLimit: true,
 		updateEvent: true, 
 		addEvent:true,
 		events: [
 		{
 			title  : 'doctor',
 			time :'3:00PM - 4:00PM',
 			start  : '2019-06-01'
 		},
 		{
 			title  : '3:00PM - 4:00PM',
 			start  : '2010-01-05',

 		},
 		{
 			title  : '3:00PM - 4:00PM',
 			start  : '2019-06-15',
 		}
 		]
 	});
 });

// second opinion page js

$(document).ready(function(){
	$('.doctor_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="btn slick-prev" data-role="none"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="btn slick-next" data-role="none"><i class="fa fa-caret-right" aria-hidden="true"></i></button',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{	
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 577,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});

// appoinment booking based on doctor

$(document).ready(function() {
 	$('#calendar1').fullCalendar({

 	});
 });

// landing page slider our customer

$(document).ready(function(){
	$('.our_customer_slider').slick({
		dots:false,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{	
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 577,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});