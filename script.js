var obj1 = {
    a: 2,
    b: 'dasfas',
    c: {
        ee: 4
    }
};

var Constr = function(a, b) {
    this.a = a;
    this.b = b;
}

var obj2 = new Constr(3, 4);
obj2.c = new Constr(4, 4);

console.log(JSON.stringify(obj2));
console.log(JSON.stringify(obj1));

console.log(obj1);
console.log(typeof obj1);
console.log(typeof JSON.stringify(obj1));

var jsonString = JSON.stringify(obj1, null, 4);

console.log(JSON.parse(jsonString));
console.log(typeof JSON.parse(jsonString));


console.log(jsonString);

var fs = require('fs');



for (var i = 0; i <= 4; i++) {
    fs.writeFileSync(
        __dirname + '/insight' + i + '.json',
        jsonString
    );
} 