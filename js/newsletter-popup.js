$(document).ready(function() {

  $(".newsletter-popup__link").on("click", function() {

    if($(".newsletter-popup__container").hasClass("newsletter-popup__container--hidden")) {

        $(".newsletter-popup__container").removeClass("newsletter-popup__container--hidden");
        $(".newsletter-popup__container").addClass("newsletter-popup__container--visible");

    } else if($(".newsletter-popup__container").hasClass("newsletter-popup__container--visible")) {

      $(".newsletter-popup__container").removeClass("newsletter-popup__container--visible");
      $(".newsletter-popup__container").addClass("newsletter-popup__container--hidden");

    }
  });

  

});
