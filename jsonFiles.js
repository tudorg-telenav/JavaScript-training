var fs = require('fs');

module.exports = {

    IndexedFile: function(
        obiectBaza,
        indexFisier
    ) {
        this.obiectBaza = obiectBaza;
        this.indexFisier = indexFisier;
        this.getProximityPointFisier = __dirname + '/insight' + indexFisier + '.json';
        
        this.creazaFisier = function() {
            fs.writeFileSync(
                this.getProximityPointFisier,
                JSON.stringify(this.obiectBaza, null, 4)
            );
        }
    }

};