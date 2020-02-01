(function() {
  var iframeLoadButton = document.querySelector(".iframe__load-button");
  // only attach event listener when an iframe is found on the page
  if(iframeLoadButton !== null) {
    iframeLoadButton.addEventListener("click", function() {
      var iframe = document.querySelector(".iframe");
      var iframeVideo = document.querySelector(".iframe .video");
      iframeVideo.setAttribute("src", iframeVideo.getAttribute("data-src"));
      iframe.classList.add("iframe--loaded");
    });
  }
})();
