"use strict";
var athletes = {};
var human = {};

function Human (firstName, secondName, age, nationality) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.nationality = nationality;
}

Human.prototype = {
    getFullName: function() {
        return this.firstName + " " + this.secondName
    },
    changeNationality: function(newNatonality) {
        this.nationality = newNatonality;
    }
}

function Athlete (firstName, secondName, age, nationality, discipline, club){
    Human.call(this, firstName, secondName, age, nationality);
    this.discipline = discipline;
    this.club = club;
}

Athlete.prototype = Object.create(Human.prototype);

athletes.module = (function(){

    var athletesList = [];
    
    return {
        addAthlete: function(athlete){
            athletesList.push(athlete);
        },
        getAthletesList: function () {
            return athletesList;
        },
        filterOlderThan: function (number){
            return athletesList.filter(function(item){
                return item.age > number;
            });
        },
        filterByFirstName: function(firstName){
            return athletesList.filter(function(item){
                return item.firstName === firstName;
            });
        }
    };
}());

function createAthleteList () {
    var footballPlayer = new Athlete("Robert", "Lewandowski", 29, "POLSKA", "football", "Bayern Monachium");
    var basketballPlayer = new Athlete("Marcin", "Gortat", 35, "POLSKA", "basketball", "Washington Wizards");
    var runner = new Athlete("Usain", "Bolt", 32, "JAMAJKA", "running", "Kingston Tigers");
    var volleyballPlayer = new Athlete ("Matej", "Kazinsky", 38,"BUŁGARIA", "volleyball", "Jastrzębski Węgiel");
    var mmaFighter = new Athlete ("Marcin", "Różalski", 31, "POLSKA", "mma", "Wisła Płock");
    
    athletes.module.addAthlete(footballPlayer);
    athletes.module.addAthlete(basketballPlayer);
    athletes.module.addAthlete(runner);
    athletes.module.addAthlete(volleyballPlayer);
    athletes.module.addAthlete(mmaFighter);
}

var athlete = new Athlete ("Jerzy", "Nowak", 29, "POLSKA",  "football", "Bayern Monachium");

createAthleteList();

console.log(athlete.getFullName());
console.log(athlete);
athlete.changeNationality("NIEMCY");
console.log(athlete);


console.log("Sportowcy starsi niż 37 lat: ");
console.log(athletes.module.filterOlderThan(37));
console.log("Sportowcu o imieniu Marcin: ");
console.log(athletes.module.filterByFirstName("Marcin"));
