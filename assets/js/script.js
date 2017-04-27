$(document).ready(function() {



  $("#carousel-next").click(function() {
    var marginleft = parseInt($("#carousel").css("margin-left").replace("px", ""));
    if (marginleft == -3840) {
      return false;
    }
    else {
      $("#carousel").css("margin-left", marginleft - 960); 

    }
  });

$("#carousel-prev").click(function() {
    var marginleft = parseInt($("#carousel").css("margin-left").replace("px", ""));
    if (marginleft == 0) {
      return false;
    }
    else {
      $("#carousel").css("margin-left", marginleft + 960); 

    }
  });

$(".circle").hover(function(){
    $(this).css("background", "#dfdfdf");
    }, function(){
    $(this).css("background-color", "white");
});



  $("#circle").click(function() {
    $('body').removeClass("no-scroll");
    $('html, body').animate( {
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 300);
      setTimeout(function() {
        $(".sidebar-container").removeClass("sidebar-active");
        $("#sidebar-button").removeClass("button-active");
        $(".page-wrapper").removeClass("wrapper-active")
        }, 300);
    return false;

  });



});