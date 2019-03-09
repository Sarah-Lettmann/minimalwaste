headerContainer = $(".header .container");
originalMarginHeader = headerContainer.outerHeight(true);

function menuLinkClicked() {

    // set classes to show or hide the main menu and pushes main are down
    var mainMenu = $(".menu-main");
    var menuHeight = $(".menu-main").height();

    if(mainMenu.hasClass("menu-main--hidden")) {
        mainMenu.removeClass("menu-main--hidden");
        mainMenu.addClass("menu-main--visible");
        // add height of menu to original margin of header
        headerContainer.css("margin-bottom", originalMarginHeader + menuHeight);
    } else {
        mainMenu.removeClass("menu-main--visible");
        mainMenu.addClass("menu-main--hidden");
        // reset margin of header
        headerContainer.css("margin-bottom", originalMarginHeader);
    }
};