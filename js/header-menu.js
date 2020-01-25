// function to expand mobile menu when button is clicked
document.getElementById("navigation__link--burger").addEventListener("click", function(e) {
  e = e || window.event;
  e.stopPropagation();
  e.preventDefault();
  var mainMenu = document.getElementById("main-menu");
  var burger = document.getElementById("burger");
  if(mainMenu.classList.contains("menu--hidden")) {
    mainMenu.classList.remove("menu--hidden");
    this.setAttribute("aria-expanded", true);
    burger.classList.remove("burger--from-cross");
    burger.classList.add("burger--to-cross");
  } else {
    mainMenu.classList.add("menu--hidden");
    this.setAttribute("aria-expanded", false);
    burger.classList.remove("burger--to-cross");
    burger.classList.add("burger--from-cross");
  }
}, false);

// function to set class for the current site in menu
(function() {
  var siteUrl = window.location.href;
  var listItemLinks = document.getElementsByClassName("menu__link");
  for(i = 0; i < listItemLinks.length; i++) {
    console.log(listItemLinks[i]);
    if(listItemLinks[i].href == siteUrl) {
      listItemLinks[i].href = "#main";
    }
  }
})();
