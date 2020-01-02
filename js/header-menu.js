var maxWidth = 1236;
var mainMenu = $(".main-menu");


// function to expand mobile menu when button is clicked
$(".navigation__link").on("click", function() {
  console.log("works");
  var mainMenuToggle = $(".navigation__link");
  var burger = mainMenuToggle.children(".burger");
  var submenuToggle = $(".menu__item--has-submenu > .menu__link");
  // not the first time expanding main menu
  if(mainMenu.hasClass("menu--hidden")) {
    mainMenu.removeClass("menu--hidden");
    mainMenuToggle.attr("aria-expanded", true);
    burger.addClass("burger--to-cross");
  } else {
    mainMenu.addClass("menu--hidden");
    mainMenuToggle.attr("aria-expanded", false);
    burger.removeClass("burger--to-cross");
  }
});

// function to expand mobile menu when button is clicked
$(".menu__link--has-submenu").on("click", function(e) {
  if ($(window).width() < maxWidth) {
    e = e || window.event;
    e.stopPropagation();
    e.preventDefault();
    // set classes to show or hide the main menu and pushes main area down
    var submenuListItem = $(this).parent(".menu__item--has-submenu");
    var submmenu = submenuListItem.children(".menu__submenu");
    var submenuHeight = parseInt(submmenu.height());
    if(submmenu.hasClass("menu__submenu--hidden")) {
      submmenu.removeClass("menu__submenu--hidden");
      $(this).attr("aria-expanded", true);
    } else {
      submmenu.addClass("menu__submenu--hidden");
      $(this).attr("aria-expanded", false);
    }
  }
});
