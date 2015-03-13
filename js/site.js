// Center inner block
$.fn.centerInner = function(inner) {
  content = this.children(inner);
  this.css("position", "relative");
  content.css("position", "absolute");
  content.css("left", (this.width() - content.width()) / 2);
  content.css("top", (this.height() - content.height()) / 2);
  return this;
}

var scrollTo = function(elem) {
  $('html, body').animate({
    scrollTop: $(elem).offset().top
  }, 700);
}

$(document).ready(function() {
  var resizeCallback = function() {
    $("#slide-one").centerInner(".inner");
    $("#slide-two").centerInner(".inner");
    $("#slide-three").centerInner(".inner");
  };

  $(window).on('resize orientationChanged', resizeCallback);
  $(window).resize();

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
