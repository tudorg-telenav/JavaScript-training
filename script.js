var obj1 = {
    a: 2,
    b: 'dasfas',
    c: {
        ee: 4
    }
};


var fs = require('fs');


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

    obiecte[i] = new ReprezentareFisierJSON(
        obj1,
        i
    );

    obiecte[i].creazaFisier();

}

console.log(obiecte);