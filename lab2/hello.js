// SCOPE
// GLOBAL SCOPER

var lib = {}

lib.module = (function() {
    var c = 0;
    var priv2 = "Hello";
    var myInterface;

    return {
        message: priv2 + " world",
        counter: function () {
            return ++c;
        },
        sayHello: function(name) {
            return "Hello " +name;
        }
    }
})();

function a(){
    return z;
}

var higherOrderFunction = function(someFun,b) {
    return someFun(b) + b;
}

// wzorzec module!, jest typeof function bo zwraca funkcje. nie ma dostepu do zmiennej i.

var counter = function() {
    var i = 0;

    function incr() {
        return i = i + 1;
    }

    return function(){
        return incr();
    };
};
//}(); Immediately executed function // IEF

counter();
counter();

function multiply (a) {
    return a * a;
};

var c = counter();
var d = counter();

c();
c();
c();

d();
d();

var person = {
    imie: "Niezanane",

    sayHello: function() {
        return "Hello " +this.imie; //bez this wywala blad
    }
}

function Z() {
    
}

// konstruktor wielką litera (standard)
function Person(name){
    this.name = name;
}

var ziutek = new Person("Ziutek");
// var beniek = Person("Beniek"); //brak operatora new

// console.log(ziutek);
// console.log(beniek.name);
// console.log(person.sayHello())


// console.log(higherOrderFunction(multiply, 4));
// console.log(multiply(2,3));
// console.log(c());
// console.log(d());
// console.log(lib.module.sayHello("Ziomek"));

// console.log(counter());
// console.log(typeof c);

function sayKwaKwa() {
    return console.log("Jestem kaczka bo mowie: " +this.kwakwa)
}

var kaczka = {
    kwakwa: "Kwa Kwa !"
};

var pies = {
    hauhau: "Hau hau !"
};

sayKwaKwa.apply(kaczka);
sayKwaKwa.apply(pies); 

function saysomething(zwierze) {
    return console.log("Jestem " +zwierze +" bo mowie: " +this.message)
}

var kaczka = {
    message: "Kwa Kwa !"
};

var pies = {
    message: "Hau hau !"
};

saysomething.apply(kaczka, ['kaczka']);
saysomething.apply(pies, ['pies']); 

var numbers = [1, 2, 3, 4, 5];

var evenNumbers = numbers.filter(function(item){
    return item % 2 === 0;
});

console.log(evenNumbers);

