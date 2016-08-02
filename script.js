var readlineSync = require('readline-sync');

var dimensiune = readlineSync.question('Dimensiune: ');

var matrice = [];
for (var i = 0; i < dimensiune; i++) {
  var linie = [];
  for (var j = 0; j < dimensiune; j++) {
    var element = readlineSync.question('Elementul nr ' + (j + 1) + ' din linia ' + (i + 1) + ': ');
    linie[j] = element;
  }
  matrice[i] = linie;
}

for (var i = 0; i < dimensiune; i++) {
  console.log(matrice[i]);
}