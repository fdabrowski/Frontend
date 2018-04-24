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
var AthletesClub = /** @class */ (function () {
    function AthletesClub() {
        this.athletes = [];
    }
    AthletesClub.prototype.addAthlete = function (athlete) {
        this.athletes.push(athlete);
    };
    AthletesClub.prototype.removeAthlete = function (name) {
        this.athletes = this.athletes.filter(function (athlete) { return athlete.secondName !== name; });
    };
    AthletesClub.prototype.changeNationality = function (name, newNationality) {
        var athlete = this.athletes
            .filter(function (athlete) { return athlete.secondName === name; })
            .map(function (athlete) { return athlete.nationality = newNationality; });
    };
    AthletesClub.prototype.getOlderThan = function (value) {
        return this.athletes.filter(function (athlete) { return athlete.age > value; });
    };
    return AthletesClub;
}());
var footballPlayer = new Athlete("Robert", "Lewandowski", 29, "POLSKA", "football", "Bayern Monachium");
var footballPlayer1 = new Athlete("Jan", "Arnold", 19, "POLSKA", "football", "Bayern Monachium");
var footballPlayer2 = new Athlete("Rudy", "Bolek", 39, "POLSKA", "football", "Bayern Monachium");
var athleteClub = new AthletesClub();
athleteClub.addAthlete(footballPlayer);
athleteClub.addAthlete(footballPlayer1);
athleteClub.addAthlete(footballPlayer2);
console.log("All Athlets in the club: ");
console.log(athleteClub.athletes);
athleteClub.removeAthlete("Arnold");
console.log("After remove Arnold: ");
console.log(athleteClub.athletes);
athleteClub.changeNationality("Bolek", "NIEMCY");
console.log("After change Bolek's natonality: ");
console.log(athleteClub.athletes);
console.log("Older than 20: ");
console.log(athleteClub.getOlderThan(20));
console.log("Older than 30: ");
console.log(athleteClub.getOlderThan(30));
