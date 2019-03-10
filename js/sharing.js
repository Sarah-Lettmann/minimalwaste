$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() >= $(".sharing").scrollTop()) { // Wenn 100 Pixel gescrolled wurde
			$(".sharing").removeClass("sharing--posabsolute");
      $(".sharing").addClass("sharing--posfixed");
		} else {
			$(".sharing").removeClass("sharing--posfixed");
      $(".sharing").removeClass("sharing--posabsolute");
		}
	});
});
