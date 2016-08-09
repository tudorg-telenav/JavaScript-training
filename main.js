var uuid = require('node-uuid');
var inside = require('point-in-polygon');

var jsonFiles = require('./jsonFiles');
var generators = require('./generators');

var TOTAL_ITEMS = 5;

var obiecte = [];
var itemGenerator = new generators.ItemGenerator();

for (var i = 0; i < TOTAL_ITEMS; i++) {

    var poligonPairItem = itemGenerator.getNewItem();

    var newObject = {
        insightId: uuid.v4(),
        startTime: Date.now() - (2 * 86400000),
        endDate: Date.now() - 86400000,
        distributionArea: poligonPairItem.distribution,
        affectedArea: poligonPairItem.affected
    };

    obiecte[i] = new jsonFiles.IndexedFile(
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

// TODO: split code into modules
