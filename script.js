var fs = require('fs');
var uuid = require('node-uuid');



var TOTAL_ITEMS = 5;

var WORLD_MIN_LAT = -90;
var WORLD_MAX_LAT = 90;
var WORLD_MIN_LON = -180;
var WORLD_MAX_LON = 180;

var ITEM_MIN_SIZE = 0.01;
var ITEM_MAX_SIZE = 0.1;

var MAX_CORNERS = 8;
var MIN_CORNERS = 1;



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

var randomFromRange = function(min, max) {
    return ((max - min) * Math.random()) + min;
};

var obiecte = [];

for (var i = 0; i < TOTAL_ITEMS; i++) {

    var obj1 = {
        insightId: uuid.v4(),
        startTime: Date.now() - (2 * 86400000),
        endDate: Date.now() - 86400000,
        lat: randomFromRange(WORLD_MIN_LAT, WORLD_MAX_LAT),
        lon: randomFromRange(WORLD_MIN_LON, WORLD_MAX_LON)
    };

    obiecte[i] = new ReprezentareFisierJSON(
        obj1,
        i
    );

    obiecte[i].creazaFisier();

}