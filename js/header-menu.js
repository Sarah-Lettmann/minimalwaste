// set aria for desktop menu and accessability
$(document).ready(function() {
  if ($(window).width() >= 1200) {
    $(".menu__item--has-submenu").hover(submenuVisible, submenuHidden);
  }
});

function submenuVisible() {
  $(this).children(".menu__link").attr("aria-expanded","true");
  $(this).children(".menu__link").prop("aria-expanded","true");
}

function submenuHidden() {
  $(this).children(".menu__link").attr("aria-expanded","false");
  $(this).children(".menu__link").prop("aria-expanded","false");
}




// function to expand mobile menu when button is clicked
function menuOpenClose() {

  // set classes to show or hide the main menu and pushes main area down
  var mainMenuToggle = $(".nav__link--menu");
  var mainMenu = $(".menu--main");
  var submenuToggle = $(".menu__item--has-submenu > .menu__link");
  var submmenu = $(".menu__item--has-submenu > .menu__submenu");
  var menuHeight = parseInt(mainMenu.height());
  header = $(".header");
  main = $(".main");
  marginMain = parseInt(main.css("margin-top").replace("px", ""));

  if(mainMenu.hasClass("menu--hidden")) {

    // menu is hidden -> make it visible
    mainMenu.removeClass("menu--hidden");
    mainMenu.addClass("menu--visible");
    // set aria-expanded=true
    mainMenuToggle.attr("aria-expanded", true);
    mainMenuToggle.prop("aria-expanded", true);
    // add height of menu to original margin of header
    newMargin =  marginMain + menuHeight;
    header.css("margin-bottom", newMargin);
    // slide down main menu
    mainMenu.slideDown(200);

  } else {

    // menu is visible -> make it hidden
    mainMenu.removeClass("menu--visible");
    mainMenu.addClass("menu--hidden");
    // set aria-expanded=false
    mainMenuToggle.attr("aria-expanded", false);
    mainMenuToggle.prop("aria-expanded", false);
    // reset margin of header
    header.css("margin-bottom", 0);

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
};




// function to expand mobile menu when button is clicked
function submenuOpenClose(e) {

  // prevent default
  e = e || window.event;
  e.stopPropagation();
  e.preventDefault();

  if ($(window).width() < 1200) {
    // set classes to show or hide the main menu and pushes main area down
    var submenuToggle = $(".menu__item--has-submenu > .menu__link");
    var submmenu = $(".menu__item--has-submenu > .menu__submenu");
    var mainMenu = $(".menu--main");
    var submenuHeight = parseInt(submmenu.height());
    header = $(".header");
    main = $(".main");
    marginMain = parseInt(main.css("margin-top").replace("px", ""));
    marginHeader = parseInt(header.css("margin-bottom").replace("px", ""));

    if(submmenu.hasClass("menu--hidden")) {

      // submenu is hidden -> make it visible
      submmenu.removeClass("menu--hidden");
      submmenu.addClass("menu--visible");
      // set aria-expanded=true
      submenuToggle.attr("aria-expanded", true);
      submenuToggle.prop("aria-expanded", true);
      // add height of menu to original margin of header and margin of main
      newMarginWithSubmenu =  marginHeader + submenuHeight;
      header.css("margin-bottom", newMarginWithSubmenu);
      // slide submenu down
      submmenu.slideDown(200);

    } else {

      // submenu is visible -> make it hidden
      submmenu.removeClass("menu--visible");
      submmenu.addClass("menu--hidden");
      // set aria-expanded=false
      submenuToggle.attr("aria-expanded", false);
      submenuToggle.prop("aria-expanded", false);
      // reset margin of header
      header.css("margin-bottom", newMargin);
      // slide submenu up
      submmenu.slideUp(200);

    }
  }

};
