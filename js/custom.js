$(window).on('load',function() {
	setTimeout(function(){
		$('#loader-wrapper').fadeOut('slow', function(){
			$('body').removeAttr('style');
		});
	}, 1500);
});
$(document).ready(function(){
	$('.side_search_content a').click(function(){
		$('.right_side_search').toggleClass('open_search');
	});
	$('.side_search_content').click(function (et) {
        et.stopPropagation();
    });
	$(document).click(function (ent) {
        ent.stopPropagation();
        $(".right_side_search").removeClass('open_search');
    });
	$('.back_to_top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
	$(window).scroll(function(){
		if ($(window).scrollTop() > 600) {
			$('.back_to_top').fadeIn();
		} else {
			$('.back_to_top').fadeOut();
		}
	});

	$('.doctor_slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
		prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
		draggable: false,
		responsive: [
		{
			breakpoint: 1367,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 870,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 620,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$('.customer_slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		autoplay: true,
		draggable: true,
		responsive: [
		{
			breakpoint: 1367,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 870,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});





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

$(document).ready(function() {
 	$('#calender_dashboard').fullCalendar({
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


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// css start landing page

