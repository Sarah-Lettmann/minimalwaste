window.addEventListener("load", function() {
  includeScripts();
}, false);

function includeScripts() {
  if(checkCookiesAllowed()) {
    console.log("cookies allowed, include scripts");
    googleTagManager1 = document.createElement("script");
    googleTagManager1.setAttribute("type", "text/javascript");
    googleTagManager1.setAttribute("src", "/js/google-tagmanager.js");
    googleTagManager2 = document.createElement("iframe");
    googleTagManager2.setAttribute("type", "text/javascript");
    googleTagManager2.setAttribute("src", "https://www.googletagmanager.com/ns.html?id=GTM-WR2L2PG");
    googleTagManager2.setAttribute("style", "display:none;visibility:hidden");
    googleTagManagerNoScript = document.createElement("noscript");
    googleTagManagerNoScript.appendChild(googleTagManager2);
    document.getElementsByTagName("head")[0].appendChild(googleTagManager1);
    var body = document.getElementsByTagName("body")[0];
    body.insertBefore(googleTagManagerNoScript, body.childNodes[0]);
  }
}
