
$(document).ready(function () {
	$("#header").load("./../html/header.html");
	$("#footer").load("./../html/footer.html");
	$(".bg-sf .quote-film").css('display', 'none').slideToggle(1000);
	$(".bg-mashups .quote-mashups").css('display', 'none').slideToggle(1000);
	$(".bg-posters .quote-poster").css('display', 'none').slideToggle(1000);
		});

// 	$(".bg-contactus .socialmedia").click(function () {
// 		$('html,body').animate({ scrollTop: $(".social").offset().top }, 'slow');
// 	});
// });

// $(".bg-contactus .socialmedia").click(function () {
// 	var x = $(".social").position(); //gets the position of the div element...
// 	window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
// 	//it takes 2 parameters : (x axis cordinate, y axis cordinate);
// });
