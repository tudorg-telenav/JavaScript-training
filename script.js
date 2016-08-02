
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('test.xml')
});

var i = 1;
lineReader.on('line', function (line) {
  
  
  
  if (i == 4) {
    
    require('fs').appendFile(
      __dirname + '/rezultat.xml',
      line,
      {
        flag: 'a'
      },
      function (err) {
      }
    );
    
    console.log('Line from file:', line);
  }
  i++;
});


// TODO: construim tot programul ca parte a unui obiect ca sa nu nest-uim functiile

var CititorLinie = function(numeFisier, nrLinie) {
  this.numeFisier = numeFisier;
  this.nrLinie = nrLinie;
  
  this.interfataFisier = require('readline').createInterface({
    input: require('fs').createReadStream(numeFisier)
  });
  
  this.rezultat = function(unCallback) {
    var i = 1;
    this.interfataFisier.on('line', function (line) {

      if (i == nrLinie) {
        console.log('Line from file:', line);
      }
      i++;
    });
    
    
    
    return 'nimic';
  }
}

var cititor1 = new CititorLinie('test.xml', 4);

var cititor2 = new CititorLinie('rezultat.xml', 2);

cititor1.rezultat(function(rezultat) {
  console.log(rezultat);
});
cititor2.rezultat(function(rezultat) {
  console.log(rezultat);
});