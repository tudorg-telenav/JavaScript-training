var fs = require('fs');
var uuid = require('node-uuid');



var TOTAL_ITEMS = 5;

var WORLD_MIN_LAT = -90;
var WORLD_MAX_LAT = 90;
var WORLD_MIN_LON = -180;
var WORLD_MAX_LON = 180;

var ITEM_MIN_RADIUS = 0.01;
var ITEM_MAX_RADIUS = 0.1;

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

var ItemGenerator = function() {

    this.randomFromRange = function(min, max) {
        return ((max - min) * Math.random()) + min;
    };
    this.randomIntFromRange = function(min, max) {
        max = max + 1;
        var value = ((max - min) * Math.random()) + min;
        return Math.floor(value);
    };

    this.getWorldLat = function() {
        return this.randomFromRange(WORLD_MIN_LAT, WORLD_MAX_LAT);
    };

    this.getWorldLon = function() {
        return this.randomFromRange(WORLD_MIN_LON, WORLD_MAX_LON);
    };

    // main out API function
    this.getNewItem = function() {

        var basePoint = {
            lat: this.getWorldLat(),
            lon: this.getWorldLon()
        };

        var affectedCornersNo = this.randomIntFromRange(MIN_CORNERS, MAX_CORNERS);
        var distributionCornersNo = this.randomIntFromRange(MIN_CORNERS, MAX_CORNERS);

        var affectedCorners = [];
        for (var i = 0; i < affectedCornersNo; i++) {
            affectedCorners[i] = {

            };
        }

        return {
            affected: {
                lat: this.getWorldLat()
            },
            distribution: {
                lon: this.getWorldLon()
            }
        }
    };

};

var obiecte = [];
var itemGenerator = new ItemGenerator();

for (var i = 0; i < TOTAL_ITEMS; i++) {

    var poligonPairItem = itemGenerator.getNewItem();

    var newObject = {
        insightId: uuid.v4(),
        startTime: Date.now() - (2 * 86400000),
        endDate: Date.now() - 86400000,
        affectedArea: poligonPairItem.affected,
        distributionArea: poligonPairItem.distribution
    };

    obiecte[i] = new ReprezentareFisierJSON(
        newObject,
        i
    );

    obiecte[i].creazaFisier();

}


