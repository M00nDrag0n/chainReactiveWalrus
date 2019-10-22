$(document).ready(function() {
  $("button#white").click(function() {
    $("body").addClass("white-background");
  });

     $("#active").toggle();
       $("#active").click(function(){
         $("body").addClass("winter-background");
     });

  $("button#black").click(function() {
    $("body").addClass("black-background");
  });
    $("#active").toggle();
    $("#active").click(function() {
    $("body").addClass("nocturnal-background");
    });

    $("button#blue").click(function() {
      $("body").addClass("blue-background");
      $("#active").toggle();
        $("#active").hover(function(){
          $("body").addClass("shiny-background");
    });
  });
});
