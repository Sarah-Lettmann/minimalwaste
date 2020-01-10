// function to expand mobile menu when button is clicked
document.getElementById("navigation__link--burger").addEventListener("click", function() {
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

// function to expand submenu when parent is clicked
var submenuToggls = document.getElementsByClassName("menu__link--has-submenu");
for(var i = 0; i < submenuToggls.length; i++) {
  submenuToggls[i].addEventListener("click", function(e) {
    e = e || window.event;
    e.stopPropagation();
    e.preventDefault();
    var submenu = this.nextElementSibling;
    if(submenu.classList.contains("menu__submenu--hidden")) {
      submenu.classList.remove("menu__submenu--hidden");
      this.setAttribute("aria-expanded", true);
    } else {
      submenu.classList.add("menu__submenu--hidden");
      this.setAttribute("aria-expanded", false);
    }
  }, false);
}
