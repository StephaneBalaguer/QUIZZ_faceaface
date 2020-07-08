var buzzBuzzers = require('buzz-buzzers');
const buzzers = buzzBuzzers();

var express = require('express');
var ent = require('ent'); // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.use(express.static('public'));

var LedD = true;
var LedG = true;
var buzzerlock = false; //TRUE = DESACTIVE
// Chargement de la page index.html
app.get('/', function (req, res) {
    //  res.sendfile(__dirname + '/img/1.bmp');
    //  res.sendfile(__dirname + '/img/2.bmp');
    res.sendFile(__dirname + '/qpuc.html');

  });

app.get('/master', function (req, res) {
  res.sendFile(__dirname + '/master.html');
});




io.sockets.on('connection', function (socket, pseudo) {

    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('gauche', function (message) {
      console.log("Gauche recu");
      socket.broadcast.emit('qui', "gauche");
    });
    socket.on('droite', function (message) {
      console.log("Droite recu");
      socket.broadcast.emit('qui', "droite");
    });
    socket.on('gestion', function (message) {
      console.log(message);
      socket.broadcast.emit("gestion", message);
    });


    socket.on('action', function (message) {

      if(message == "allumerd"){
        console.log(message);
        LedD=true;
        loupiote();
      }
      if(message == "allumerg"){
        console.log(message);
        LedG=true;
        loupiote();
      }
      if(message == "eteindred"){
        console.log(message);
        LedD=false;
        loupiote();
      }
      if(message == "eteindreg"){
        console.log(message);
        LedG=false;
        loupiote();
      }
      if(message == "clignoterg"){
        console.log(message);
        clignoterg();
      }
      if(message == "clignoterd"){
        console.log(message);
        clignoterd();
      }
      if(message == "clignoter"){
        console.log(message);
        clignoterfafshort();
      }
    });

    socket.on("nomDroite", function (message) {
      console.log('NomDroite recu : ' + message)
      socket.broadcast.emit("nomDroite", message);
    });

    socket.on("nomGauche", function (message) {
      console.log('NomGauche recu : ' + message);
      socket.broadcast.emit("nomGauche", message);
    });

  });
swag();
setTimeout(clignoterfaf,5000)




function clignoterfafshort(){
 var i =0 ;
 while(i<3000) {
  setTimeout(allumerfaf,i);
  setTimeout(eteindre, i+100);
  i+=200;
}
setTimeout(loupiote,3100);
}


function clignoterd(){
 var i =0 ;
 while(i<3000) {
  setTimeout(allumerD,i);
  setTimeout(eteindreD, i+100);
  i+=200;
}
setTimeout(loupiote,3100);
}



function clignoterg(){
 var i =0 ;
 while(i<3000) {
  setTimeout(allumerG,i);
  setTimeout(eteindreG, i+100);
  i+=200;
}
setTimeout(loupiote,3100);
}

function clignoterd(){
 var i =0 ;
 while(i<3000) {
  setTimeout(allumerD,i);
  setTimeout(eteindreD, i+100);
  i+=200;
}
setTimeout(loupiote,3100);
}


function clignoter(){
  var i =0 ;
  while(i<5000) {
    setTimeout(allumer,i);
    setTimeout(eteindre, i+100);
    i+=200;
  }
}

function allumerfaf(){
  buzzers.setLeds(true,false,false,true);

}

function loupiote(){
  buzzers.setLeds(LedG,false,false,LedD);
}

function clignoterfaf(){
  var i =0 ;
  while(i<10000) {
    setTimeout(allumerfaf,i);
    setTimeout(eteindre, i+100);
    i+=200;
  }
  setTimeout(allumerfaf,10200);
}

function allumerG(){
  buzzers.setLeds(true,false,false,LedD);
}
function eteindreG(){
  buzzers.setLeds(false,false,false,LedD);
}



function allumerD(){
  buzzers.setLeds(LedG,false,false,true);
}
function eteindreD(){
  buzzers.setLeds(LedG,false,false,false);
}




function swag(){
  buzzers.setLeds(true, false, false, false);
  setTimeout(function() {
    buzzers.setLeds(true, true, false, false);
    setTimeout(function() {
      buzzers.setLeds(true, true, true, false);
      setTimeout(function() {
       buzzers.setLeds(true, true, true, true);
       setTimeout(function() {
        buzzers.setLeds(false, true, true, true);
        setTimeout(function() {
          buzzers.setLeds(false, false, true, true);
          setTimeout(function() {
            buzzers.setLeds(false, false, false, true);
            setTimeout(function() {
              buzzers.setLeds(false, false, false, false);
              setTimeout(function() {
                buzzers.setLeds(true, true, true, true);
                setTimeout(function() {
                  buzzers.setLeds(false, false, false, false);
                  setTimeout(function() {
                    buzzers.setLeds(true, true, true, true);
                    setTimeout(function() {
                      buzzers.setLeds(false, false, false, false);
                      setTimeout(function() {
                        buzzers.setLeds(true, true, true, true);
                        setTimeout(function() {
                          buzzers.setLeds(false, false, false, false);
                          setTimeout(function() {
                            buzzers.setLeds(true, true, true, true);

                          }, 250);
                        }, 250);
                      }, 250);
                    }, 250);
                  }, 250);
                }, 250);
              }, 250);
            }, 250);
          }, 250);
        }, 250);
      }, 250);
     },250);
    },250);
  },250);
}

function blinkBuzzerLeds() {

  setInterval(function() {

    buzzers.setLeds(true, true, true, true);

    setTimeout(function() {

      buzzers.setLeds(false, false, false, false);

    }, 500);

  }, 5000);

}


function allumer(){
  buzzers.setLeds(true,true,true,true);
}
function eteindre(){
  buzzers.setLeds(false,false,false,false);
}


//blinkBuzzerLeds();

buzzers.onError(function(err) {

  console.log('Error:', err);

});



buzzers.onPress(function(ev) {
  if(ev.button==0){
    console.log("[BUZZER] le buzzer " +ev.controller+ " a buzzé");
    if(ev.controller == 1) {
      io.sockets.emit("qui", "gauche");
      io.sockets.emit("quo", "gauche");
    }
    if(ev.controller == 4) {
     io.sockets.emit("qui", "droite");
     io.sockets.emit("quo", "droite");
   }
 }
 /*   if(ev.button==4){
        buzzers.setLeds(false,false,false,false);
        buzzerlock=false;
    }
    */
  });

server.listen(8080);