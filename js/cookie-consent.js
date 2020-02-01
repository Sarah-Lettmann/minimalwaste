var cookieNotice = document.querySelector(".cn-modal");

// create cookie settings cookie
function createCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// read out cookie
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

// checks whether a cookie is set for accepting or refusing cookies
function checkCookiesAllowed() {
  var cookie = readCookie("cookie-notice");
  if(cookie) {
    if(cookie == "accept") {
      cookieNotice.classList.add("cn-modal--hidden");
      console.info("cookies accepted");
      return true;
    } else if(cookie == "refuse") {
      cookieNotice.classList.add("cn-modal--hidden");
      console.info("cookies refused");
      return false;
    }
  } else {
    cookieNotice.classList.remove("cn-modal--hidden");
    document.querySelector(".cookie-notice__title").focus();
    console.info("user has not chosen an option yet, show cookie notice");
    return false;
  }
}

// Listener for buttons of dialog (accept or refuse cookies)
window.addEventListener("load", function() {
  // event listener for cookie notice buttons, create cookie with fitting value
  document.querySelector(".cookie-notice__button--refuse").addEventListener("click", function() {
    createCookie("cookie-notice", "refuse", 31);
    checkCookiesAllowed();
  });
  document.querySelector(".cookie-notice__button--accept").addEventListener("click", function() {
    createCookie("cookie-notice", "accept", 31);
    checkCookiesAllowed();
  });
  checkCookiesAllowed();
}, false);

// event listener for only allow focus in dialog and not allow user to tab out of dialog
// also allows closing the dialog with pushing ESC key
cookieNotice.addEventListener("keydown", function(e) {
  var KEY_TAB = 9;
  var KEY_ESC = 27;

	switch(e.keyCode) {
		case KEY_TAB:
      break;
		case KEY_ESC:
      cookieNotice.classList.add("cn-modal--hidden");
			break;
		default:
			break;
	}
});
