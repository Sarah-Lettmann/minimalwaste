$(document).ready(function () {
  var disqusPublicKey = "3EDMbAHuywRR9PXQnBNpiB8e5mmru9cHrUd8XQkftk3n2ma4jVfKJ7IO0BAWWmn2";
  var disqusShortname = "minimalwaste";
  var threadUrl = 'link:' + $('.comments__button').attr('data-disqus-url');

  $.ajax({
    type: 'GET',
    url: 'https://disqus.com/api/3.0/threads/set.jsonp',
    data: { api_key: disqusPublicKey, forum: disqusShortname, thread: threadUrl },
    cache: false,
    dataType: 'jsonp',
    success: function(result) {
      if (result.response.length === 1) {
        btnText = 'Kommentare anzeigen (' + result.response[0].posts + ')';
        $('.comments__button').html(btnText);
      }
    }
  });

  $('.comments__button').on('click', function() {
    $.ajaxSetup({cache:true});
    $.getScript('http://' + disqusShortname + '.disqus.com/embed.js');
    $.ajaxSetup({cache:false});
    $(this).remove();
  });

  if(/\#comment/.test(location.hash)){
    $('.comments__button').trigger('click');
  }
});
