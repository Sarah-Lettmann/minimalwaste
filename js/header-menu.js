var maxWidth = 1236;
var mainMenu = $(".main-menu");

// function to expand mobile menu when button is clicked
$(".navigation__link--burger").on("click", function() {
  var mainMenuToggle = $(this);
  var burger = mainMenuToggle.children(".burger");
  var submenuToggle = $(".menu__item--has-submenu > .menu__link");
  if(mainMenu.hasClass("menu--hidden")) {
    mainMenu.removeClass("menu--hidden");
    mainMenuToggle.attr("aria-expanded", true);
    burger.removeClass("burger--from-cross");
    burger.addClass("burger--to-cross");
  } else {
    mainMenu.addClass("menu--hidden");
    mainMenuToggle.attr("aria-expanded", false);
    burger.removeClass("burger--to-cross");
    burger.addClass("burger--from-cross");
  }
});

// function to expand submenu when parent is clicked
$(".menu__link--has-submenu").on("click", function(e) {
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
});
