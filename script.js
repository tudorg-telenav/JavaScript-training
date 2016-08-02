var fs = require('fs');

var rezultat1 = fs.readFileSync( __dirname + '/test.xml');

console.log(typeof rezultat1);
console.log(rezultat1.toString());

// ------------------------------
var rezultat2 = fs.readFileSync(
  __dirname + '/test.xml',
  {
    encoding: 'utf8'
  }
  );

console.log(typeof rezultat2);
console.log(rezultat2);