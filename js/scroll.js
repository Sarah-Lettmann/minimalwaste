$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 1000);
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('.back-to-top').addClass("back-to-top--visible");
    $('.back-to-top').removeClass("back-to-top--hidden");
	} else {
		$('.back-to-top').addClass("back-to-top--hidden");
    $('.back-to-top').removeClass("back-to-top--visible");
	}
});
