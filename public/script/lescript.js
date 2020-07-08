    /*-------------------------------LES VARIABLES---------------------------------------------------------*/

    var socket = io.connect('http://localhost:8080');
    var soquet = io.connect('http://localhost:8080/master');
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
    var chgmt_main = false;
    
    /*-------------------------------LES FONCTIONS---------------------------------------------------------*/

    function joue_son() {
        son = document.getElementById("br");
        son.load();
        son.play();
    }

    function joue_buzz() {
        son = document.getElementById("buzz");
        son.load();
        son.play();
    }
    
    function joue_ecoule() {
        son = document.getElementById("ecoule");
        son.load();
        son.play();
    }

    function droite_main() {
        son = document.getElementById("main");
        son.load();
        son.volume = 0.3;
        son.play();
        document.getElementById("qui_a_la_main").innerHTML = 'G';
        document.getElementById("m_quatre").innerHTML = 'G';
        document.getElementById("m_troise").innerHTML = 'D';
        document.getElementById("m_deuxes").innerHTML = 'G';
        document.getElementById("m_unesss").innerHTML = 'D';
        var per = 0;
        var id = setInterval(frame, 2);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                qua.style.transform = 'translate(-' + per + '%,0%)';
                tro.style.transform = 'translate( ' + per + '%,0%)';
                deu.style.transform = 'translate(-' + per + '%,0%)';
                une.style.transform = 'translate( ' + per + '%,0%)';

                qua_bg.style.transform = 'translate(-' + per + '%,0%)';
                tro_bg.style.transform = 'translate( ' + per + '%,0%)';
                deu_bg.style.transform = 'translate(-' + per + '%,0%)';
                une_bg.style.transform = 'translate( ' + per + '%,0%)';

                qua_bo.style.transform = 'translate(-' + per + '%,0%)';
                tro_bo.style.transform = 'translate( ' + per + '%,0%)';
                deu_bo.style.transform = 'translate(-' + per + '%,0%)';
                une_bo.style.transform = 'translate( ' + per + '%,0%)';

                qua_ca.style.transform = 'translate(-' + per + '%,0%)';
                tro_ca.style.transform = 'translate( ' + per + '%,0%)';
                deu_ca.style.transform = 'translate(-' + per + '%,0%)';
                une_ca.style.transform = 'translate( ' + per + '%,0%)';
                per = per + 1;

            }
        }
    }

    function gauche_main() {
        son = document.getElementById("main");
        son.load();
        son.volume = 0.3;
        son.play();
        document.getElementById("qui_a_la_main").innerHTML = 'D';
        document.getElementById("m_quatre").innerHTML = 'D';
        document.getElementById("m_troise").innerHTML = 'G';
        document.getElementById("m_deuxes").innerHTML = 'D';
        document.getElementById("m_unesss").innerHTML = 'G';
        var per = 0;
        var id = setInterval(frame, 2);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                qua.style.transform = 'translate( ' + per + '%,0%)';
                tro.style.transform = 'translate(-' + per + '%,0%)';
                deu.style.transform = 'translate( ' + per + '%,0%)';
                une.style.transform = 'translate(-' + per + '%,0%)';

                qua_bg.style.transform = 'translate( ' + per + '%,0%)';
                tro_bg.style.transform = 'translate(-' + per + '%,0%)';
                deu_bg.style.transform = 'translate( ' + per + '%,0%)';
                une_bg.style.transform = 'translate(-' + per + '%,0%)';

                qua_bo.style.transform = 'translate( ' + per + '%,0%)';
                tro_bo.style.transform = 'translate(-' + per + '%,0%)';
                deu_bo.style.transform = 'translate( ' + per + '%,0%)';
                une_bo.style.transform = 'translate(-' + per + '%,0%)';
                
                qua_ca.style.transform = 'translate( ' + per + '%,0%)';
                tro_ca.style.transform = 'translate(-' + per + '%,0%)';
                deu_ca.style.transform = 'translate( ' + per + '%,0%)';
                une_ca.style.transform = 'translate(-' + per + '%,0%)';
                per = per + 1;
            }
        }
    }

    function passe_droite(element) {
        chgmt_main = true;
        var ele = document.getElementById(element);
        var ele_bg = document.getElementById(element + '_bg');
        var ele_bo = document.getElementById(element + '_bo');
        var ele_ca = document.getElementById(element + '_ca');
        document.getElementById("m_" + element).innerHTML = 'D';
        document.getElementById("qui_a_la_main").innerHTML = 'D';
        document.getElementById("bg_gauche").className = "compteur_bg_main";
        document.getElementById("bg_droite").className = "compteur_bg";
        var tam = 0;
        var per = 0;
        var id = setInterval(frame, 2);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                tam = -45 + 2 * per;
                ele.style.transform = 'translate( ' + tam + '%,0%)';
                ele_bg.style.transform = 'translate( ' + tam + '%,0%)';
                ele_bo.style.transform = 'translate( ' + tam + '%,0%)';
                ele_ca.style.transform = 'translate( ' + tam + '%,0%)';
                per = per + 1;
            }
        }
    }

    function passe_gauche(element) {
        chgmt_main = true;
        var ele = document.getElementById(element);
        var ele_bg = document.getElementById(element + '_bg');
        var ele_bo = document.getElementById(element + '_bo');
        var ele_ca = document.getElementById(element + '_ca');
        document.getElementById("m_" + element).innerHTML = 'G';
        document.getElementById("qui_a_la_main").innerHTML = 'G';
        document.getElementById("bg_droite").className = "compteur_bg_main";
        document.getElementById("bg_gauche").className = "compteur_bg";
        var tam = 0;
        var per = 0;
        var id = setInterval(frame, 2);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                tam = 45 - 2 * per;
                ele.style.transform = 'translate( ' + tam + '%,0%)'
                ele_bg.style.transform = 'translate( ' + tam + '%,0%)'
                ele_bo.style.transform = 'translate( ' + tam + '%,0%)'
                ele_ca.style.transform = 'translate( ' + tam + '%,0%)'
                per = per + 1;
            }
        }
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
        if (initial == 0) {
            son = document.getElementById("tiktac");
            son.load();
            son.play();
        } else {
            son = document.getElementById("tiktac");
            son.play();
        }
        per = initial;
        id = setInterval(frame, intervalle);
        function frame() {
           socket.on('qui', function (etatbuzz) {
            if (etatbuzz=="droite" && document.getElementById("qui_a_la_main").innerHTML == 'G') {
                if (document.getElementById("buzzer_g").innerHTML == 1) {
                    buzz = document.getElementById("buzz");
                    buzz.load();
                    buzz.play();
                    document.getElementById("buzzer_g").innerHTML = 0;
                }
                document.getElementById("tiktac").pause();
                document.getElementById("log_timer").innerHTML = parseFloat(per);
                clearInterval(id);
                return;
            } else if (etatbuzz=="gauche" && document.getElementById("qui_a_la_main").innerHTML == 'D') {

                if (document.getElementById("buzzer_d").innerHTML == 1) {
                    buzz = document.getElementById("buzz");
                    buzz.load();
                    buzz.play();
                    document.getElementById("buzzer_d").innerHTML = 0;
                }
                document.getElementById("tiktac").pause();
                document.getElementById("log_timer").innerHTML = parseFloat(per);
                clearInterval(id);
                return;
            }
        });
           if (per > total) {
            joue_ecoule();
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
                document.getElementById("tiktac").pause();
                joue_ecoule();
                une_bg.style.color = 'rgba(49,122,245,1)';
                document.getElementById("log").innerHTML = 'FINI';
            }
            if(per == 1 || per == (r_qua + r_tro + 1) || per == (r_qua + r_tro + r_deu) + 1 || per == r_qua + 1 || chgmt_main ){
                if (document.getElementById("qui_a_la_main").innerHTML == "D"){
                    document.getElementById("bg_gauche").className = "compteur_bg_main";
                    document.getElementById("bg_droite").className = "compteur_bg";
                    socket.emit("action", "allumerg");
                    socket.emit("action", "eteindred");
                }else{
                    document.getElementById("bg_droite").className = "compteur_bg_main";
                    document.getElementById("bg_gauche").className = "compteur_bg";
                    socket.emit("action", "allumerd");
                    socket.emit("action", "eteindreg");                
                }
                chgmt_main = false ;
            }
            document.getElementById("log_timer").innerHTML = parseFloat(per);    

        }
    }
}

$(document).on("keypress", function(event) {
    var x = event.which || event.keyCode;
    document.getElementById("log").innerHTML = x;
    console.log(x)
    if (event.keyCode == 112) { //P
        if(document.getElementById("qui_a_la_main").innerHTML == "G"){
            document.getElementById("tiktac").pause();
            joue_buzz();
            clearInterval(id);            
        }

    } else if (event.keyCode == 97) { //A
        if(document.getElementById("qui_a_la_main").innerHTML == "D"){
            document.getElementById("tiktac").pause();
            joue_buzz();
            clearInterval(id);        
        }

        
    } else if (event.keyCode == 109) { //M
        droite_main()
    } else if (event.keyCode == 113) { //Q
        gauche_main()
    } else if (event.keyCode == 58) { //: /
        document.getElementById("buzzer_g").innerHTML = 1
        document.getElementById("buzzer_d").innerHTML = 1
        lancer(0)
    } else if (event.keyCode == 48) { // Pad 0
        document.getElementById("buzzer_g").innerHTML = 1
        document.getElementById("buzzer_d").innerHTML = 1
        lancer(parseFloat(document.getElementById("log_timer").innerHTML))
    } else if (event.keyCode == 33) {
       lancer(parseFloat(document.getElementById("log_timer").innerHTML))
    } else if (event.keyCode == 40) { // 5 ( [
        passe_droite("quatre")
    } else if (event.keyCode == 45) { // 6 - |
        passe_gauche("quatre")

    } else if (event.keyCode == 116) { // T
        passe_droite("troise")
    } else if (event.keyCode == 121) { // Y
        passe_gauche("troise")
    } else if (event.keyCode == 103) { // G
        passe_droite("deuxes")
    } else if (event.keyCode == 104) { // H
        passe_gauche("deuxes")

    } else if (event.keyCode == 98) { // B
        passe_droite("unesss")
    } else if (event.keyCode == 110) { // N
        passe_gauche("unesss");
    } else if (event.keyCode == 119) { // W
        reinitialiser();
    } else if (event.keyCode == 32) { // ESPACE
        joue_son();
        main = document.getElementById("qui_a_la_main").innerHTML;
        if (main == "G"){
            if(per < r_qua){
                document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 4;
            }else if (per < (r_qua + r_tro)){
                document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 3;
            }else if (per < (r_qua + r_tro + r_deu)){
                document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 2;
            }else if (per < (r_qua + r_tro + r_deu + r_une)){
                document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 1;
            }
        }
        if (main == "D"){
            if(per < r_qua){
                document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 4;
            }else if (per < (r_qua + r_tro)){
                document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 3;
            }else if (per < (r_qua + r_tro + r_deu)){
                document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 2;
            }else if (per < (r_qua + r_tro + r_deu + r_une)){
                document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 1;
            }
        }
    }


});

function maj_noms(){
    console.log("Ok");
    eq_d = "D"+document.getElementById("nom_droite").innerHTML;
    eq_g = "G"+document.getElementById("nom_gauche").innerHTML;
    console.log(eq_d);
    console.log(eq_g);
    soquet.emit("mastere", "Deq_d");
    soquet.emit("mastere", "Geq_g");    
}


socket.on("gestion", function(action) {
    console.log(action);
    if (action == "gauche1") {
        console.log("1");
        joue_son()
        document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 1;
    } else if (action == "gauche2") {
       console.log("2");
       joue_son()
       document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 2;
   } else if (action == "gauche3") {
       console.log("3");
       joue_son()
       document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 3;
   } else if (action == "gauche4") {
       console.log("4");
       joue_son()
       document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 4;
   } else if (action == "droite1") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 1;
} else if (action == "droite2") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 2;
} else if (action == "droite3") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 3;
} else if (action == "droite4") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 4;
} else if (action == "points") {
    joue_son();
    document.getElementById("timeres").style.display = "";
    main = document.getElementById("qui_a_la_main").innerHTML;
    if (main == "G"){
        if(per <= r_qua){
            document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 4;
        }else if (per <= (r_qua + r_tro)){
            document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 3;
        }else if (per <= (r_qua + r_tro + r_deu)){
            document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 2;
        }else if (per <= (r_qua + r_tro + r_deu + r_une)){
            document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 1;
        }
    }
    if (main == "D"){
        if(per <= r_qua){
            document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 4;
        }else if (per <= (r_qua + r_tro)){
            document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 3;
        }else if (per <= (r_qua + r_tro + r_deu)){
            document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 2;
        }else if (per <= (r_qua + r_tro + r_deu + r_une)){
            document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 1;
        }
    }
}  else if (action =="maindroite") {
    droite_main();
} else if (action =="maingauche") {
    gauche_main();
} else if (action =="gochrono") {
    console.log("lechrono");
    document.getElementById("buzzer_g").innerHTML = 1;
    document.getElementById("buzzer_d").innerHTML = 1;
    lancer(0);
} else if (action=="restartchrono") {
    document.getElementById("buzzer_g").innerHTML = 1;
    document.getElementById("buzzer_d").innerHTML = 1;
    lancer(parseFloat(document.getElementById("log_timer").innerHTML));
} else if (action=="reinit") {
    reinitialiser();
} else if (action == "timer4d") {
    passe_droite("quatre");
} else if (action == "timer4g") {
    passe_gauche("quatre");
} else if (action == "timer3d") {
    passe_droite("troise");
} else if (action == "timer3g") {
    passe_gauche("troise");
} else if (action == "timer2d") {
    passe_droite("deuxes");
} else if (action == "timer2g") {
    passe_gauche("deuxes");
} else if (action == "timer1d") {
    passe_droite("unesss");
} else if (action == "timer1g") {
    passe_gauche("unesss");
} else if (action == "affiche_timer") {
    document.getElementById("timeres").style.display = "";
} else if (action == "cache_timer") {
    document.getElementById("timeres").style.display = "none";
} else if (action == "act_noms") {
    maj_noms();
}
});
