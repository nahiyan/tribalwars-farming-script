var village_coords = '535|468 533|469';
var light_cavalry = 15;
var village_id = 2248;
village_coords = village_coords.split(' ');
var i = 1;

function openWindow () {
	rallypoint = window.open("http://en80.tribalwars.net/game.php?village="+village_id+"&screen=place", "_blank");
	if (rallypoint){
		rallypoint.onload = function(){
			var rallypointdoc = rallypoint.document;
			rallypointdoc.querySelector("#unit_input_spy").value = 1;
			rallypointdoc.querySelector("#unit_input_light").value = light_cavalry;
			rallypointdoc.querySelector("input[placeholder='123|456']").value = village_coords[(i-1)];
			rallypointdoc.querySelector("#target_attack").click();

			if (i < village_coords.length) {
				i++;
				openWindow();
			}
		};
	}
}

openWindow();