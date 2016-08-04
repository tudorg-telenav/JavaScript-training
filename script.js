var fs = require('fs');
var uuid = require('node-uuid');
var inside = require('point-in-polygon');



var TOTAL_ITEMS = 5;

var WORLD_MIN_LAT = -90;
var WORLD_MAX_LAT = 90;
var WORLD_MIN_LON = -180;
var WORLD_MAX_LON = 180;

var ITEM_MIN_RADIUS = 0.01;
var ITEM_MAX_RADIUS = 0.1;

var MAX_CORNERS = 7;
var MIN_CORNERS = 2;



var ReprezentareFisierJSON = function(
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
        return this.randomFromRange(
            WORLD_MIN_LAT,
            WORLD_MAX_LAT
        );
    };

    this.getWorldLon = function() {
        return this.randomFromRange(
            WORLD_MIN_LON,
            WORLD_MAX_LON
        );
    };

    this.getProximityPoint = function(basePoint, radius) {
        return {
            lat: this.randomFromRange(
                basePoint.lat - radius,
                basePoint.lat + radius
            ),
            lon: this.randomFromRange(
                basePoint.lon - radius,
                basePoint.lon + radius
            )
        };
    }

    this.getSquare = function(theTwoPoints) {
        // [{lat: ..., lon: ...}, {lat: ..., lon: ...}]
        var theFourPoints = [];
        var p1 = theTwoPoints[0];
        var p2 = theTwoPoints[1];

        theFourPoints.push(p1);
        theFourPoints.push({
            lat: p1.lat,
            lon: p2.lon
        });
        theFourPoints.push(p2);
        theFourPoints.push({
            lat: p2.lat,
            lon: p1.lon
        });
        return theFourPoints;
    };

    // receives an array of lat/lon objects
    // returns an array of lat/lon values as small arrays
    this.getArrayPairs = function(objectPairs) {
        var arrayPairs = [];

        for (var i = 0; i < objectPairs.length; i++) {
            arrayPairs.push([
                objectPairs[i].lat,
                objectPairs[i].lon
            ]);
        }

        return arrayPairs;
    };

    // main out API function
    this.getNewItem = function() {

        var basePoint = {
            lat: this.getWorldLat(),
            lon: this.getWorldLon()
        };

        var distributionCornersNo = this.randomIntFromRange(
            MIN_CORNERS,
            MAX_CORNERS
        );
        var affectedCornersNo = this.randomIntFromRange(
            MIN_CORNERS,
            MAX_CORNERS
        );

        var radius = this.randomFromRange(
            ITEM_MIN_RADIUS,
            ITEM_MAX_RADIUS
        );

        var distributionCorners = [];
        for (var i = 0; i < distributionCornersNo; i++) {
            distributionCorners[i] = this.getProximityPoint(
                basePoint,
                radius
            );
        }

        if (distributionCornersNo > 2) {
            distributionCorners.push(
                distributionCorners[0]
            );
        }

        var affectedCorners = [];
        for (var i = 0; i < affectedCornersNo; i++) {
            affectedCorners[i] = this.getProximityPoint(
                basePoint,
                radius
            );
        }
        if (affectedCornersNo > 2) {
            affectedCorners.push(
                affectedCorners[0]
            );
        }

        return {
            distribution: distributionCorners,
            affected: affectedCorners
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
        distributionArea: poligonPairItem.distribution,
        affectedArea: poligonPairItem.affected
    };

    obiecte[i] = new ReprezentareFisierJSON(
        newObject,
        i
    );

    obiecte[i].creazaFisier();

}

// TODO: we have to remember to cover the case for
// 3 points (first = last) describing a line

// TODO: explore command line options

// TODO: git versioning and backward commits for each day

// TODO: presentation @ all hands meeting

// measure miliseconds of execution

// for too long time, reiterate algorithm

// for edge cases change the algorithm

// TODO: save already computed items in the database
// then have small client programs that make calls to
// the API and analyze the response

// TODO: adding unit tests for small algorithms (Jasmine)

