function menuLinkClicked() {

    // set classes to show or hide the main menu and pushes main are down
    var mainMenuToggle = $(".nav-link-menu");
    var mainMenu = $(".menu-main");
    var menuHeight = parseInt($(".menu-main").height());
    header = $(".header");
    originalMarginHeader = 96;

    if(mainMenu.hasClass("menu-main--hidden")) {
      // menu is hidden -> make it visible
      mainMenu.removeClass("menu-main--hidden");
      mainMenu.addClass("menu-main--visible");
      // set aria-expanded=true
      mainMenuToggle.attr("aria-expanded", true);
      // add height of menu to original margin of header
      newMargin =  originalMarginHeader + menuHeight;
      header.css("margin-bottom", newMargin);
    } else {
      // manu is visible -> make it hidden
      mainMenu.removeClass("menu-main--visible");
      mainMenu.addClass("menu-main--hidden");
      // set aria-expanded=false
      mainMenuToggle.attr("aria-expanded", false);
      // reset margin of header
      header.css("margin-bottom", originalMarginHeader);
    }
};
