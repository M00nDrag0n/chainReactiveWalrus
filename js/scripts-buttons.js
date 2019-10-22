$(document).ready(function() {
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
     $("#active").toggle();
       $("#click").click(function(){
         $("body").removeClass();
         $("body").addClass("winter-background");
       });
     });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
      $("#active").toggle();
      $("#click").click(function() {
        $("body").removeClass();
        $("body").addClass("nocturnal-background");
      });
    });

    $("button#blue").click(function() {
      $("body").removeClass();
      $("body").addClass("blue-background");
      $("#active").toggle();
        $("#click").click(function(){
          $("body").removeClass();
          $("body").addClass("shiny-background");
    });
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
     $("#active").toggle();
     });

     $("button#purple").click(function() {
       $("body").removeClass();
       $("body").addClass("purple-background");
       $("#active").toggle();
       $("#active").click(function() {
         $("#active").addClass("green-background");
     });


});


});
