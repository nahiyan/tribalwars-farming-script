var village_coords = '535|468 533|469 537|471 532|472 531|473 536|474 535|474 534|474 538|474 532|479 529|454 525|471 527|474 528|478 522|478 526|479 522|481 526|481 527|481 522|482 526|484 549|454 543|476 550|476 545|477 548|478 544|482 531|464 531|463 533|478 544|462';
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