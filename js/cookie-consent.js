var cookieNotice = document.getElementById("cn-modal");

function createCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function checkCookiesAllowed() {
  var cookie = readCookie("cookie-notice");
  console.log("read cookie");
  if(cookie) {
    if(cookie == "accept") {
      console.log("cookies already accepted");
      return true;
    } else if(cookie == "refuse") {
      console.log("cookies already refused");
      return false;
    }
  } else {
    cookieNotice.classList.remove("cn-modal--hidden");
    console.log("user has not chosen an option yet, show cookie notice");
    return false;
  }
}

window.addEventListener("load", function() {
  // event listener for cookie notice buttons, create cookie with fitting value
  document.getElementById("cookie-notice__button--refuse").addEventListener("click", function() {
    console.log("cookies refused");
    createCookie("cookie-notice", "refuse", 31);
    location.reload();
  });
  document.getElementById("cookie-notice__button--accept").addEventListener("click", function() {
    console.log("cookies accepted");
    createCookie("cookie-notice", "accept", 31);
    location.reload();
  });
  checkCookiesAllowed();
}, false);
