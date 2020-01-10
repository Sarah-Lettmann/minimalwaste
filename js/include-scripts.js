window.addEventListener("load", function() {
  if(checkCookiesAllowed()) {
    console.log("cookies allowed, include scripts");
    googleAdsense1 = document.createElement("script");
    googleAdsense1.setAttribute("type", "text/javascript");
    googleAdsense1.setAttribute("async", "");
    googleAdsense1.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
    googleAdsense2 = document.createElement("script");
    googleAdsense2.setAttribute("src", "/js/google-adsense.js");
    googleTagManager1 = document.createElement("script");
    googleTagManager1.setAttribute("src", "/js/google-tagmanager.js");
    googleTagManager2 = document.createElement("iframe");
    googleTagManager2.setAttribute("src", "https://www.googletagmanager.com/ns.html?id=GTM-WR2L2PG");
    googleTagManager2.setAttribute("style", "display:none;visibility:hidden");
    googleTagManagerNoScript = document.createElement("noscript");
    googleTagManagerNoScript.appendChild(googleTagManager2);
    document.getElementsByTagName("head")[0].appendChild(googleAdsense1);
    document.getElementsByTagName("head")[0].appendChild(googleAdsense2);
    document.getElementsByTagName("head")[0].appendChild(googleTagManager1);
    var body = document.getElementsByTagName("body")[0];
    body.insertBefore(googleTagManagerNoScript, body.childNodes[0]);
  }
}, false);
