var fs = require('fs');
fs.readFile( __dirname + '/test.xml', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(data.toString());
});

console.log('==============================================');

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('test.xml')
});
var i = 0;
lineReader.on('line', function (line) {
  
  
  
  if (i == 4) {
    console.log('Line from file:', line);
    console.log(fs);
  }
  i++;
  
  
  
  
  
});


// TODO: construim tot programul ca parte a unui obiect ca sa nu nest-uim functiile