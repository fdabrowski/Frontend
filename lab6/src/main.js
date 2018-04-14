var Student = /** @class */ (function () {
    function Student(name, yob) {
        this.name = name;
        this.yob = yob;
        this.name = name;
        this.yob = yob;
    }
    return Student;
}());
function sayHi(person) {
    console.log('Hello ' + person.name);
}
var zenek = new Student('Zenek', 1993);
var ziutek = { name: 'Ziutek', yob: 1967 };
sayHi(zenek);
