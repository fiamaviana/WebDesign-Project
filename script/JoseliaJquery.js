/* JQUERY US BY JOSELIA REIS */
/*Crete a slide effect to show information that is hidden,
after click on the bottom*/
/*This code was taken and adaptaded from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down*/
$(document).ready(function(){
  $("#included").click(function(){
    $("#more").slideToggle("slow");
  });
});
