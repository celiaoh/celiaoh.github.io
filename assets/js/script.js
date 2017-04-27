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


});