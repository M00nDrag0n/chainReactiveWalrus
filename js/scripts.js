$(document).ready(function() {
  $("h1").click(function() {
    $("#text-1").toggle();
    $("#text-1").click(function() {
      $("#img-1").toggle();
      $("#img-1").click(function() {
      $("#img-2").toggle();
      $("#img-2").click(function() {
        $("#text-3").show();
        $("#text-3").click(function() {
          $(".container").hide();
          $("#Shrek").show();
      });
      });
    });
  });
  });
});
