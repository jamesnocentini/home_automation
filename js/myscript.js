function button(value) {
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
request.open('POST', '/arduino', true);
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
request.setRequestHeader('Content-length', value.length);
request.setRequestHeader('Connection', 'close');
request.send('code=' + value);
return false;
}

$(document).ready(function(){
//  $("#homefeatures").delay(500).fadeIn(500);
  $("#door_off").show(); //door is character g
  $("#door_on").hide();
  $("#llights_off").show(); //ground floor /lounge is character a
  $("#llights_on").hide();
  $("#music_off").show(); // is character h
  $("#music_on").hide();
  $("#tv_off").show(); // is character i
  $("#tv_on").hide();
  $("#pir_untriggered").show(); // is character e
  $("#pir_triggered").hide();
  $("#blights_off").show(); // is character b note: this one will change...
  $("#blights_on").hide();
  $("#curtains_closed").show(); // is character f
  $("#curtains_opened").hide();

//click handling
  $('#lights1 > a').click(function(){
    onClick="button('a')" 
    $("#llights_on").toggle();
    $("#llights_off").toggle();
  });
  $('#door1 > a').click(function(){
    $("#door_on").toggle();
    $("#door_off").toggle();
  });
  $('#music1 > a').click(function(){ 
    $("#music_on").toggle();
    $("#music_off").toggle();
  });
  $('#curtains1 > a').click(function(){ 
    $("#curtains_opened").toggle();
    $("#curtains_closed").toggle();
  });
  $('#tv1 > a').click(function(){  
    $("#tv_on").toggle();
    $("#tv_off").toggle();
  });
  $('#pir1 > a').click(function(){ 
    $("#pir_trigged").toggle();	
    $("#pir_untrigged").toggle();
  });
  $('#lights2 > a').click(function(){ 
    $("#blights_on").toggle();
    $("#blights_off").toggle();
  });
});
