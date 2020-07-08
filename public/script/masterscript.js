	// Connexion à socket.io


	var doc = prompt("Serveur Address ? ( empty is local )", "localhost - 192.168.1.44 - thisismyip.com"); 
	if (doc == null) {
	doc = "localhost"
	}
	var socket = io.connect('http://'+doc+':8080');
 

	socket.on( 'error', function() {
		alert("an error occured, verify given address ! ")
	});
	//var socket = io.connect('http://localhost:8080');
        // On demande le pseudo, on l'envoie au serveur et on l'affiche dans le titre
        var pseudo = "ADMIN";
        var nomJ = pseudo;
        document.title = pseudo + ' - ' + document.title;
        function droite() {
        	socket.emit('droite',"droite");
        }
        function gauche() {
        	socket.emit("gauche", "gauche");
        }
        function gestion() {
        	socket.emit("gestion", "action1");
        }

		function verifyconnection() {
			socket.emit("action", "verifyconnection");
		}
		

//fonction chronos
function gochrono() {
	socket.emit("gestion", "gochrono");
}   
function restartchrono() {
	socket.emit("gestion", "restartchrono");
}

function reinit() {
	socket.emit("gestion", "reinit");
}

//donner la main
function maingauche() {
	socket.emit("gestion", "maingauche");
}

function maindroite() {
	socket.emit("gestion", "maindroite");
}


//les points
function gauche1() {
	socket.emit("gestion", "gauche1");
}

function gauche2() {
	socket.emit("gestion", "gauche2");
}

function gauche3() {
	socket.emit("gestion", "gauche3");
}

function gauche4() {
	socket.emit("gestion", "gauche4");
}


function droite1() {
	socket.emit("gestion", "droite1");
}

function droite2() {
	socket.emit("gestion", "droite2");
}

function droite3() {
	socket.emit("gestion", "droite3");
}

function droite4() {
	socket.emit("gestion", "droite4");
}

//les timers

function timer1g() {
	socket.emit("gestion", "timer1g");
}

function timer2g() {
	socket.emit("gestion", "timer2g");
}

function timer3g() {
	socket.emit("gestion", "timer3g");
}

function timer4g() {
	socket.emit("gestion", "timer4g");
}


function timer1d() {
	socket.emit("gestion", "timer1d");
}

function timer2d() {
	socket.emit("gestion", "timer2d");
}

function timer3d() {
	socket.emit("gestion", "timer3d");
}

function timer4d() {
	socket.emit("gestion", "timer4d");
}




function allumerd() {
	socket.emit("action", "allumerd");
}

function allumerg() {
	socket.emit("action", "allumerg");
}

function eteindred() {
	socket.emit("action", "eteindred");
}

function eteindreg() {
	socket.emit("action", "eteindreg");
}

function clignoterg() {
	socket.emit("action", "clignoterg");
}

function clignoterd() {
	socket.emit("action", "clignoterd");
}

function clignoter() {
	socket.emit("action", "clignoter");
}
