// back to top scroll handler and setting of css classes
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - 100
//     }, 1000);
// });

$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('.back-to-top').addClass("back-to-top--visible");
    $('.back-to-top').removeClass("back-to-top--hidden");
	} else {
		$('.back-to-top').addClass("back-to-top--hidden");
    $('.back-to-top').removeClass("back-to-top--visible");
	}
});


// scroll for related posts scroll
$(document).ready(function() {
  // scroll right
  $(".related-posts__scroll-arrow--right").click(function () {
    var leftPos = $('.related-posts__posts').scrollLeft();
    $(".related-posts__posts").animate({scrollLeft: leftPos + 100}, 300);
  });

  // scroll left
  $(".related-posts__scroll-arrow--left").click(function () {
    var leftPos = $('.related-posts__posts').scrollLeft();
    $(".related-posts__posts").animate({scrollLeft: leftPos - 100}, 300);
  });
});
