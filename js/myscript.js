$(document).ready(function(){
  $("#door_off").show();
  $("#door_on").hide();
  $('#door1 > a').click(function(){ // For demo's sake we attach the crossFade to a click event.
    $("#door_on").toggle();
    $("#door_off").toggle(); //url('../images/home_off.png') no-repeat;
  });
});

$(document).ready(function(){
  $("#llights_off").show();
  $("#llights_on").hide();
  $('#lights1 > a').click(function(){ // For demo's sake we attach the crossFade to a click event.
    $("#llights_on").toggle();
    $("#llights_off").toggle(); //url('../images/home_off.png') no-repeat;
  });
});

$(document).ready(function(){
  $("#music_off").show();
  $("#music_on").hide();
  $('#music1 > a').click(function(){ // For demo's sake we attach the crossFade to a click event.
    $("#music_on").toggle();
    $("#music_off").toggle(); //url('../images/home_off.png') no-repeat;
  });
});

$(document).ready(function(){
  $("#tv_off").show();
  $("#tv_on").hide();
  $('#tv1 > a').click(function(){ // For demo's sake we attach the crossFade to a click event
    $("#tv_on").toggle();
    $("#tv_off").toggle(); //url('../images/home_off.png') no-repeat;
  });
});

$(document).ready(function(){
  $("#pir_untrigged").show();
  $("#pir_trigged").hide();
  $('#pir1 > a').click(function(){ // For demo's sake we attach the crossFade to a click event.
    $("#pir_trigged").toggle();	
    $("#pir_untrigged").toggle(); //url('../images/home_off.png') no-repeat;
  });
});

$(document).ready(function(){
  $("#blights_off").show();
  $("#blights_on").hide();
  $('#lights2 > a').click(function(){ // For demo's sake we attach the crossFade to a click event.
    $("#blights_on").toggle();
    $("#blights_off").toggle(); //url('../images/home_off.png') no-repeat;
  });
});

$(document).ready(function(){
  $("#curtains_closed").show();
  $("#curtains_opened").hide();
  $('#curtains1 > a').click(function(){ // For demo's sake we attach the crossFade to a click event.
    $("#curtains_opened").toggle();
    $("#curtains_closed").toggle(); //url('../images/home_off.png') no-repeat;
  });
});
