var fs = require('fs');
fs.readFile( __dirname + '/test.xml', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(data.toString());
});