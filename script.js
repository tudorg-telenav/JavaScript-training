var fs = require('fs');
var uuid = require('node-uuid');


var ReprezentareFisierJSON = function(obiectBaza, indexFisier) {
    this.obiectBaza = obiectBaza;
    this.indexFisier = indexFisier;
    this.numeFisier = __dirname + '/insight' + indexFisier + '.json';
    
    this.creazaFisier = function() {
        fs.writeFileSync(
            this.numeFisier,
            JSON.stringify(this.obiectBaza, null, 4)
        );
    }
}


var obiecte = [];

for (var i = 0; i <= 4; i++) {

console.log(Date.now())

    var obj1 = {
        insightId: uuid.v4(),
        startTime: Date.now() - (2 * 86400000),
        endDate: Date.now() - 86400000,
        a: 2,
        b: 'dasfas',
        c: {
            ee: 4
        }
    };

    obiecte[i] = new ReprezentareFisierJSON(
        obj1,
        i
    );

    obiecte[i].creazaFisier();

}