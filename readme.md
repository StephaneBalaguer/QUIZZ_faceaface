Pour lancer l'app : node app.js

Interface de jeu : localhost:8080
Interface admin : localhost:8080/master

testé sous:
node -- version : 10.16.3
npm - v         : 6.9.0








En cas de soucis de type Vendor Id not found ou semblable.

Dans la dep Buzz-buzzer.connect.js
ajouter en ligne 2 : 
    console.log(nodeHid.devices());

Dans la liste des buzzers rechercher si il n'y a pas un peripherique mal installé, sans nom.
Si oui : le desinstaller  ou rechercher le vendorID et product id des buzzers, et les ajouter plus bas.

Si les buzzers ne sont pas reconnus par windows. 
Peripheriques, proprieté, modifier, mettre a jour les pilotes, choisir depuis un fichier local, me laisser choisir dans une liste, prendre le base USB driver.


