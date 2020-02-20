document.querySelector(".search__form").addEventListener("submit", function(e) {
  e.preventDefault();
  var searchTerm = document.querySelector(".search__input").value;
  var searchTrigger = document.querySelector(".search__trigger");
  searchTrigger.value = searchTerm;
  searchTrigger.dispatchEvent(new Event('keyup'));
  document.querySelector(".search__results-hint--start-search").classList.add("search__results-hint--hidden");
  return false;
});
