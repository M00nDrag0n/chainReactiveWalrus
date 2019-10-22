$(document).ready(function() {
  $("h1").click(function() {
    $("#text-1").toggle();
    $("#text-1").click(function() {
      $("#img-1").fadeToggle();
      $("#img-1").click(function() {
      $("#img-2").fadeToggle();
      $("#img-2").click(function() {
        $("#text-3").show();
        $("#text-3").click(function() {
          $(".container").fadeOut().hide();
          $("#Shrek").fadeIn().show();
      });
      });
    });
  });
  });
});
