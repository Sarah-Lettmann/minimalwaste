function menuLinkClicked() {

    // set classes to show or hide the main menu and pushes main are down
    var mainMenuToggle = $(".nav-link-menu");
    var mainMenu = $(".menu--main");
    var menuHeight = parseInt(mainMenu.height());
    header = $(".header");
    marginHeader = parseInt(header.css("margin-bottom").replace("px", ""));

    if(mainMenu.hasClass("menu--hidden")) {

      // menu is hidden -> make it visible
      mainMenu.removeClass("menu--hidden");
      mainMenu.addClass("menu--visible");
      // set aria-expanded=true
      mainMenuToggle.attr("aria-expanded", true);
      // add height of menu to original margin of header
      newMargin =  marginHeader + menuHeight;
      header.css("margin-bottom", newMargin);
      mainMenu.slideDown();

    } else {

      // menu is visible -> make it hidden
      mainMenu.removeClass("menu--visible");
      mainMenu.addClass("menu--hidden");
      // set aria-expanded=false
      mainMenuToggle.attr("aria-expanded", false);
      // reset margin of header
      newMargin =  marginHeader - menuHeight;
      header.css("margin-bottom", newMargin);
      mainMenu.slideUp();

    }
};
