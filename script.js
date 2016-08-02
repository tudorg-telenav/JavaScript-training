var fs = require('fs');
fs.readFile( __dirname + '/test.xml', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(data.toString());
});

//==============================================

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('test.xml')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});