var scrollTo = function(elem) {
  $('html, body').animate({
    scrollTop: $(elem).offset().top
  }, 700);
}

$(document).ready(function() {
  $("#menu-projects").click(function(){ scrollTo("#slide-two"); return false; });
  $("#menu-contact").click(function(){ scrollTo("#slide-three"); return false; });

  $("#go-top").click(function(){ scrollTo("#slide-one"); });

  $(window).scroll(function(){
    var firsth = $("#slide-one").height();
    var scrollpos = $(window).scrollTop();
    if(scrollpos > firsth - firsth/2) {
      $("#go-top").fadeIn(400);
    } else {
      $("#go-top").fadeOut(150);
    }
  });
  $(window).scroll();
});
