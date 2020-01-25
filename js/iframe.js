document.getElementById("iframe__image").addEventListener("click", function() {
  var iframe = document.getElementById("iframe");
  var iframeVideo = document.getElementById("iframe__video");
  console.log(iframe);
  console.log(iframeVideo);
  console.log(iframeVideo.getAttribute("data-src"));
  iframeVideo.setAttribute("src", iframeVideo.getAttribute("data-src"));
  iframe.classList.add("iframe--loaded");
});
