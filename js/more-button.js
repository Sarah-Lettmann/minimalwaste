document.querySelector(".more-button").addEventListener("click", function(e) {
  var postListItems = document.querySelectorAll(".all-posts__list-item--hidden");
  for (var i = 0; i < 10; i++) {
    postListItems[i].classList.remove("all-posts__list-item--hidden");
  }
});
