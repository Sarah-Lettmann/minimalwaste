var maxWidth = 1236;

// set aria for desktop menu and accessability
$(document).ready(function() {
  // only do this for desktop menu, when hover is possible
  if ($(window).width() >= maxWidth) {
    $(".menu__item--has-submenu").hover(function() {
      $(this).children(".menu__link").attr("aria-expanded","true");
      $(this).children(".menu__link").prop("aria-expanded","true");
      $(this).children(".menu__submenu").removeClass("menu--hidden");
    }, function() {
      $(this).children(".menu__link").attr("aria-expanded","false");
      $(this).children(".menu__link").prop("aria-expanded","false");
      $(this).children(".menu__submenu").addClass("menu--hidden");
    });
  }
});

// function to expand mobile menu when button is clicked
$(".navigation__link").on("click", function() {
  var mainMenuToggle = $(".navigation__link");
  console.log(mainMenuToggle);
  var mainMenu = $(".main-menu");
  var submenuToggle = $(".menu__item--has-submenu > .menu__link");
  var submmenu = $(".menu__item--has-submenu > .menu__submenu");

  if(mainMenu.hasClass("menu--hidden")) {
    mainMenu.removeClass("menu--hidden");
    mainMenuToggle.attr("aria-expanded", true);
    mainMenuToggle.prop("aria-expanded", true);
    mainMenu.slideDown(200);
  } else {
    mainMenu.addClass("menu--hidden");
    mainMenuToggle.attr("aria-expanded", false);
    mainMenuToggle.prop("aria-expanded", false);

    // collapse submenus when opened
    if(submmenu.hasClass("menu--visible")) {
      submmenu.removeClass("menu--visible");
      submmenu.addClass("menu--hidden");
      // set aria-expanded=false
      submenuToggle.attr("aria-expanded", false);
      submenuToggle.prop("aria-expanded", false);
      // slide up main menu and all submenus
      submmenu.slideUp(200);
    }
    mainMenu.slideUp(200);

  }

});




// function to expand mobile menu when button is clicked
$(".menu__link--has-submenu").on("click", submenuOpenClose);
function submenuOpenClose(e) {

  // prevent default
  e = e || window.event;
  e.stopPropagation();
  e.preventDefault();

  if ($(window).width() < 1200) {
    // set classes to show or hide the main menu and pushes main area down
    var submenuToggle = $(".menu__item--has-submenu > .menu__link");
    var submmenu = $(".menu__item--has-submenu > .menu__submenu");
    var mainMenu = $(".menu");
    var submenuHeight = parseInt(submmenu.height());

    if(submmenu.hasClass("menu--hidden")) {

      // submenu is hidden -> make it visible
      submmenu.removeClass("menu--hidden");
      submmenu.addClass("menu--visible");
      // set aria-expanded=true
      submenuToggle.attr("aria-expanded", true);
      submenuToggle.prop("aria-expanded", true);
      // slide submenu down
      submmenu.slideDown(200);

    } else {

      // submenu is visible -> make it hidden
      submmenu.removeClass("menu--visible");
      submmenu.addClass("menu--hidden");
      // set aria-expanded=false
      submenuToggle.attr("aria-expanded", false);
      submenuToggle.prop("aria-expanded", false);
      // slide submenu up
      submmenu.slideUp(200);
    }
  }
};
