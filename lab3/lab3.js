var someObject = {};

function Shape(x, y) {
    this.x = x;
    this.y = y;
}

// Bez prototype blad, dziedziczenie prototypowe
// Shape.prototype.message = function () {
//     console.log("Hello from message");
// }

// Shape.prototype.getX = function () {
//     return this.x;
// }

// Shape.prototype.getY = function () {
//     return this.y;
// }

// Shape.prototype.move = function (deltaX, deltaY) {
//     this.x = deltaX;
//     this.y = deltaY;
// }

Shape.prototype = {
    message: function () {
        console.log("Hello from message");
    },
    getX: function () {
        return this.x;
    },
    getY: function () {
        return this.y;
    },
    move: function (deltaX, deltaY) {
        this.x += deltaX;
        this.y += deltaY;
    }
}

function Circle (x, y, r) {
    Shape.call(this, x, y);
    this.r = r;
}

// Bindowanie do prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor.Circle;
Circle.prototype.area = function() {
    return Math.PI * this.r * this.r
}

var aShape = new Shape(2,1);
var aCircle = new Circle (20, 30, 2);

console.log(aShape.toString());
console.log(aCircle.area());

console.log(aShape.x);

aShape.message();
console.log(aShape.getX());
console.log(aShape.getY());


// DZIEDZICZENIE PRZYKŁAD

function create (proto) {
    function F() {}
    F.prototype = proto;
    F.prototype.sayHello = function (){
        return "Hello!"
    };
    return new F();
}

var base = {
    x: 5,
    y: 7,
    getX: function() {
        return this.x;
    },
    getY: function() {
        return this.y;
    }
}

var someExtension = create(base);

console.log(someExtension.getX());
console.log(someExtension.getY());
console.log(someExtension.sayHello());

// ---------------------------------------------------------------------

