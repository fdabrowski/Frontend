var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, secondName, age, nationality) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.nationality = nationality;
    }
    return Person;
}());
var Athlete = /** @class */ (function (_super) {
    __extends(Athlete, _super);
    function Athlete(firstName, secondName, age, nationality, discipline, club) {
        var _this = _super.call(this, firstName, secondName, age, nationality) || this;
        _this.discipline = discipline;
        _this.club = club;
        return _this;
    }
    return Athlete;
}(Person));
function changeNationality(athlete, newNationality) {
    athlete.nationality = newNationality;
}
var footballPlayer = new Athlete("Robert", "Lewandowski", 29, "POLSKA", "football", "Bayern Monachium");
console.log(footballPlayer);
changeNationality(footballPlayer, "NIMECY");
console.log(footballPlayer);
