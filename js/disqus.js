var commentsButton = document.querySelector(".comments__button");
var disqus_config = function () {
    this.page.url = commentsButton.getAttribute("data-disqus-url");
};

commentsButton.addEventListener("click", function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://minimalwaste.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  this.classList.add("comments__button--hidden");
}, false);
