var fs = require('fs');

var compuneIndex = function(index) {
    var rezultat;
    if (index < 10) {
        rezultat = '00' + index;
    } else if (index < 100) {
        rezultat = '0' + index;
    } else {
        rezultat = '' + index;
    }
    return rezultat;
}

for (var i = 0; i <= 111; i++) {
    fs.writeFileSync(
        __dirname + '/insight' + compuneIndex(i) + '.json',
        ''
    );
}

var obj1 = {
    a: 2,
    b: 'dasfas',
    c: {
        ee: 4
    }
};

console.log(obj1);