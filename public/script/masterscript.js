	// Connexion à socket.io
	var socket = io.connect('http://localhost:8080');
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

function act_noms(){
    //retrive names from input text, send it to the server
    var nomDroite = document.getElementById("nomDroite").value;
    var nomGauche = document.getElementById("nomGauche").value;
    console.log('actnom');
    socket.emit("nomDroite", nomDroite);
    socket.emit("nomGauche", nomGauche);

}

function reposDesYeux(){
    socket.emit("gestion", "repos");
}

function fatigueDesYeux(){
    socket.emit("gestion", "fatigue");
}

socket.on('nomDroite', function (message) {
    document.getElementById("eq_d").innerHTML = message;
});
socket.on('nomGauche', function (message) {
    document.getElementById("eq_g").innerHTML = message;

});

//fonction chronos
function gochrono() {
	socket.emit("gestion", "gochrono");
    console.log("lechrono");
    document.getElementById("buzzer_g").innerHTML = 1;
    document.getElementById("buzzer_d").innerHTML = 1;
    lancer(0);
}   
function restartchrono() {
	socket.emit("gestion", "restartchrono");
    document.getElementById("buzzer_g").innerHTML = 1;
    document.getElementById("buzzer_d").innerHTML = 1;
    lancer(parseFloat(document.getElementById("log_timer").innerHTML));
}

function reinit() {
	socket.emit("gestion", "reinit");
	reinitialiser();
}

//donner la main
function maingauche() {
	socket.emit("gestion", "maingauche");
	gauche_main();
}

function maindroite() {
	socket.emit("gestion", "maindroite");
	droite_main();
}


//les points
function points() {
	socket.emit("gestion", "points");
}

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
	passe_gauche("unesss");
}

function timer2g() {
	socket.emit("gestion", "timer2g");
	passe_gauche("deuxes");
}

function timer3g() {
	socket.emit("gestion", "timer3g");
	passe_gauche("troise");
}

function timer4g() {
	socket.emit("gestion", "timer4g");
	passe_gauche("quatre");
}


function timer1d() {
	socket.emit("gestion", "timer1d");
	passe_droite("unesss");
}

function timer2d() {
	socket.emit("gestion", "timer2d");
	passe_droite("deuxes");
}

function timer3d() {
	socket.emit("gestion", "timer3d");
	passe_droite("troise");
}

function timer4d() {
	socket.emit("gestion", "timer4d");
	passe_droite("quatre");
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

function affiche_timer() {
	socket.emit("gestion", "affiche_timer");
}

function cache_timer() {
	socket.emit("gestion", "cache_timer");
}


var qua = document.getElementById("quatre");
var tro = document.getElementById("troise");
var deu = document.getElementById("deuxes");
var une = document.getElementById("unesss");
var qua_bg = document.getElementById("quatre_bg");
var tro_bg = document.getElementById("troise_bg");
var deu_bg = document.getElementById("deuxes_bg");
var une_bg = document.getElementById("unesss_bg");

var qua_bo = document.getElementById("quatre_bo");
var tro_bo = document.getElementById("troise_bo");
var deu_bo = document.getElementById("deuxes_bo");
var une_bo = document.getElementById("unesss_bo");

var qua_ca = document.getElementById("quatre_ca");
var tro_ca = document.getElementById("troise_ca");
var deu_ca = document.getElementById("deuxes_ca");
var une_ca = document.getElementById("unesss_ca");

var h_qua = parseFloat(qua.style.height) ;
var h_tro = parseFloat(tro.style.height) ;
var h_deu = parseFloat(deu.style.height) ;
var h_une = parseFloat(une.style.height) ;

var t_qua = parseFloat(qua.style.top) ;
var t_tro = parseFloat(tro.style.top) ;
var t_deu = parseFloat(deu.style.top) ;
var t_une = parseFloat(une.style.top) ;

var timer = 20 ;
var repar = [0.4, 0.3, 0.2, 0.1];
var facto = 20 ;
var total = facto*timer ;
var intervalle = (1000/facto) - (1) ; //(calcul du temps des opéations)

var r_qua = total*repar[0];
var r_tro = total*repar[1];
var r_deu = total*repar[2];
var r_une = total*repar[3];

var id;
var per;
    
/*-------------------------------LES FONCTIONS---------------------------------------------------------*/

/* Les translate sont opposées vis à vis de lescript.js car l'écran du présentateur est opposé à l'écran des joueurs*/
function gauche_main() {
    document.getElementById("qui_a_la_main").innerHTML = 'G';
    document.getElementById("m_quatre").innerHTML = 'G';
    document.getElementById("m_troise").innerHTML = 'D';
    document.getElementById("m_deuxes").innerHTML = 'G';
    document.getElementById("m_unesss").innerHTML = 'D';
	qua.style.transform = 'translate(-15%,0%)';
	tro.style.transform = 'translate( 15%,0%)';
	deu.style.transform = 'translate(-15%,0%)';
	une.style.transform = 'translate( 15%,0%)';

	qua_bg.style.transform = 'translate(-15%,0%)';
	tro_bg.style.transform = 'translate( 15%,0%)';
	deu_bg.style.transform = 'translate(-15%,0%)';
	une_bg.style.transform = 'translate( 15%,0%)';

	qua_bo.style.transform = 'translate(-15%,0%)';
	tro_bo.style.transform = 'translate( 15%,0%)';
	deu_bo.style.transform = 'translate(-15%,0%)';
	une_bo.style.transform = 'translate( 15%,0%)';

	qua_ca.style.transform = 'translate(-15%,0%)';
	tro_ca.style.transform = 'translate( 15%,0%)';
	deu_ca.style.transform = 'translate(-15%,0%)';
	une_ca.style.transform = 'translate( 15%,0%)';
	}


function droite_main() {
    document.getElementById("qui_a_la_main").innerHTML = 'D';
    document.getElementById("m_quatre").innerHTML = 'D';
    document.getElementById("m_troise").innerHTML = 'G';
    document.getElementById("m_deuxes").innerHTML = 'D';
    document.getElementById("m_unesss").innerHTML = 'G';
	qua.style.transform = 'translate( 15%,0%)';
	tro.style.transform = 'translate(-15%,0%)';
	deu.style.transform = 'translate( 15%,0%)';
	une.style.transform = 'translate(-15%,0%)';

	qua_bg.style.transform = 'translate( 15%,0%)';
	tro_bg.style.transform = 'translate(-15%,0%)';
	deu_bg.style.transform = 'translate( 15%,0%)';
	une_bg.style.transform = 'translate(-15%,0%)';

	qua_bo.style.transform = 'translate( 15%,0%)';
	tro_bo.style.transform = 'translate(-15%,0%)';
	deu_bo.style.transform = 'translate( 15%,0%)';
	une_bo.style.transform = 'translate(-15%,0%)';

	qua_ca.style.transform = 'translate( 15%,0%)';
	tro_ca.style.transform = 'translate(-15%,0%)';
	deu_ca.style.transform = 'translate( 15%,0%)';
	une_ca.style.transform = 'translate(-15%,0%)';
}

function passe_gauche(element) {
    var ele = document.getElementById(element);
    var ele_bg = document.getElementById(element + '_bg');
    var ele_bo = document.getElementById(element + '_bo');
    var ele_ca = document.getElementById(element + '_ca');
    document.getElementById("m_" + element).innerHTML = 'D';
    document.getElementById("qui_a_la_main").innerHTML = 'D';
	ele.style.transform = 'translate( 15%,0%)';
	ele_bg.style.transform = 'translate( 15%,0%)';
	ele_bo.style.transform = 'translate( 15%,0%)';
	ele_ca.style.transform = 'translate( 15%,0%)';
}

function passe_droite(element) {
    var ele = document.getElementById(element);
    var ele_bg = document.getElementById(element + '_bg');
    var ele_bo = document.getElementById(element + '_bo');
    var ele_ca = document.getElementById(element + '_ca');
    document.getElementById("m_" + element).innerHTML = 'G';
    document.getElementById("qui_a_la_main").innerHTML = 'G';
	ele.style.transform = 'translate(-15%,0%)';
	ele_bg.style.transform = 'translate(-15%,0%)';
	ele_bo.style.transform = 'translate(-15%,0%)';
	ele_ca.style.transform = 'translate(-15%,0%)';
}

function reinitialiser() {
    qua.style.height = h_qua + "%";
    tro.style.height = h_tro + "%";
    deu.style.height = h_deu + "%";
    une.style.height = h_une + "%";
    qua.style.top = t_qua + "%";
    tro.style.top = t_tro + "%";
    deu.style.top = t_deu + "%";
    une.style.top = t_une + "%";
    qua_bg.style.color = 'white' ;
    tro_bg.style.color = 'white' ;
    deu_bg.style.color = 'white' ;
    une_bg.style.color = 'white' ;
    document.getElementById("log_timer").innerHTML = 0 ;

    qua.style.transform = 'translate( 0%, 0%)';
    tro.style.transform = 'translate( 0%, 0%)';
    deu.style.transform = 'translate( 0%, 0%)';
    une.style.transform = 'translate( 0%, 0%)';

    qua_bg.style.transform = 'translate( 0%, 0%)';
    tro_bg.style.transform = 'translate( 0%, 0%)';
    deu_bg.style.transform = 'translate( 0%, 0%)';
    une_bg.style.transform = 'translate( 0%, 0%)';

    qua_bo.style.transform = 'translate( 0%, 0%)';
    tro_bo.style.transform = 'translate( 0%, 0%)';
    deu_bo.style.transform = 'translate( 0%, 0%)';
    une_bo.style.transform = 'translate( 0%, 0%)';

    qua_ca.style.transform = 'translate( 0%, 0%)';
    tro_ca.style.transform = 'translate( 0%, 0%)';
    deu_ca.style.transform = 'translate( 0%, 0%)';
    une_ca.style.transform = 'translate( 0%, 0%)';

}

    function lancer(initial) {
        var qua = document.getElementById("quatre");
        var tro = document.getElementById("troise");
        var deu = document.getElementById("deuxes");
        var une = document.getElementById("unesss");
        var qua_bg = document.getElementById("quatre_bg");
        var tro_bg = document.getElementById("troise_bg");
        var deu_bg = document.getElementById("deuxes_bg");
        var une_bg = document.getElementById("unesss_bg");
        per = initial;
        id = setInterval(frame, intervalle);
        function frame() {
           socket.on('quo', function (etatbuzz) {
            if (etatbuzz=="droite" && document.getElementById("qui_a_la_main").innerHTML == 'D') {
                if (document.getElementById("buzzer_g").innerHTML == 1) {
                    document.getElementById("buzzer_g").innerHTML = 0;
                }
                document.getElementById("log_timer").innerHTML = parseFloat(per);
                clearInterval(id);
                return;
            } else if (etatbuzz=="gauche" && document.getElementById("qui_a_la_main").innerHTML == 'G') {

                if (document.getElementById("buzzer_d").innerHTML == 1) {
                    document.getElementById("buzzer_d").innerHTML = 0;
                }
                document.getElementById("log_timer").innerHTML = parseFloat(per);
                clearInterval(id);
                return;
            }
        });
           if (per > total) {
            document.getElementById("log").innerHTML = 'FINI';
            clearInterval(id);
        } else {
            if (per < r_qua ) { // 4 Points : 8 secs
                per = per + 1;
                qua.style.height = h_qua - (h_qua/r_qua) * per + '%';
                qua.style.top = t_qua + ( (h_qua/r_qua) * per) + '%';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_quatre").innerHTML;
            } else if (per < (r_qua + r_tro) ) { // 3 Points : 6 secs
                per = per + 1;
                qua.style.height = '0%';
                tro.style.height = h_tro - ( (h_tro/r_tro) * (per-r_qua) ) + '%';
                tro.style.top = t_tro + ( (h_tro/r_tro) * (per-r_qua) ) + '%';
                qua_bg.style.color = 'rgba(49,122,245,1)';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_troise").innerHTML;
            } else if (per < (r_qua + r_tro + r_deu)) { // 2 Points : 4 secs
                per = per + 1;
                qua.style.height = '0%';
                tro.style.height = '0%';
                deu.style.height = h_deu - ( (h_deu/r_deu) * (per-(r_qua + r_tro)) ) + '%';
                deu.style.top = t_deu + ( (h_deu/r_deu) * (per-(r_qua + r_tro)) ) + '%';
                tro_bg.style.color = 'rgba(49,122,245,1)';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_deuxes").innerHTML;
            } else if (per < (r_qua + r_tro + r_deu + r_une)) { // 1 Points : 2 secs
                per = per + 1;
                qua.style.height = '0%';
                tro.style.height = '0%';
                deu.style.height = '0%';
                une.style.height = h_une - ( (h_une/r_une) * (per-(r_qua + r_tro + r_deu)) ) + '%';
                une.style.top = t_une + ( (h_une/r_une) * (per-(r_qua + r_tro + r_deu)) ) + '%';
                deu_bg.style.color = 'rgba(49,122,245,1)';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_unesss").innerHTML;
            } else if (per == total) {
                per = per + 1;
                une_bg.style.color = 'rgba(49,122,245,1)';
                document.getElementById("log").innerHTML = 'FINI';
            }

            document.getElementById("log_timer").innerHTML = parseFloat(per);    

        }
    }
}

/*soquet.on("mastere", function(action) {
    console.log(action);
    if (action[0] == "D") {
        console.log("maj_nom");
        document.getElementById("eq_g").innerHTML = action;
    } else if (action[0] == "G") {
       console.log("maj_nom");
       document.getElementById("eq_d").innerHTML = action;
   }
});*/