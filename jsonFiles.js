var fs = require('fs');

module.exports = {//this is the module object

    //this is one of the modules constructors
    IndexedFile: function(
        obiectBaza,
        indexFisier
    ) {
        this.obiectBaza = obiectBaza;
        this.indexFisier = indexFisier;
        this.getProximityPointFisier = __dirname + '/insight' + indexFisier + '.json';
        
        //this is one method of one of the module's OBJ constructors
        this.creazaFisier = function() {
            fs.writeFileSync(
                this.getProximityPointFisier,
                JSON.stringify(this.obiectBaza, null, 4)
            );
        }
    }

};