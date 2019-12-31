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
