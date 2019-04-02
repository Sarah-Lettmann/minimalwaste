function menuLinkClicked() {

    // set classes to show or hide the main menu and pushes main are down
    var mainMenuToggle = $(".nav-link--menu");
    var mainMenu = $(".menu--main");
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
      // add height of menu to original margin of header
      newMargin =  marginMain + menuHeight;
      header.css("margin-bottom", newMargin);
      mainMenu.slideDown(200);

    } else {

      // menu is visible -> make it hidden
      mainMenu.removeClass("menu--visible");
      mainMenu.addClass("menu--hidden");
      // set aria-expanded=false
      mainMenuToggle.attr("aria-expanded", false);
      // reset margin of header
      header.css("margin-bottom", 0);
      mainMenu.slideUp(200);

    }
};
