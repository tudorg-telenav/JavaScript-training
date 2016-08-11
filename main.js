var uuid = require('node-uuid');
var inside = require('point-in-polygon');

var jsonFiles = require('./jsonFiles');
var generators = require('./generators');

var TOTAL_ITEMS = parseInt(process.argv[2]);
if (process.argv[2] == undefined) {
    console.log('Please enter an argument');
    process.exit();
}
if (isNaN(TOTAL_ITEMS)) {
    console.log('The first argument must be a number');
    process.exit();
}
if (TOTAL_ITEMS < 1) {
    console.log('The first argument must be a positive number');
    process.exit();
}
if (parseFloat(process.argv[2]) % 1 !== 0) {
    console.log('The first argument must be an integer');
    process.exit();
}

//var TOTAL_ITEMS = argumentsParser.getTotalItems(); // TODO

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

process.exit(); // not having to stop the process manually in VSCode