$(document).ready(function(){
  $("#door_off").show();
  $("#door_on").hide();
  $('#door1 > a').click(function(){ // For demo's sake we attach the crossFade to a click event.
    $("#door_on").fadeToggle(500);
    $("#door_off").fadeToggle(500); //url('../images/home_off.png') no-repeat;
  });
});
