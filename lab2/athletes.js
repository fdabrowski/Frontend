"use strict";
var athletes = {};

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


function Athlete (firstName, secondName, age, discipline, club){
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.discipline = discipline;
    this.club = club;
}

function createAthleteList () {
    var footballPlayer = new Athlete("Robert", "Lewandowski", "29", "football", "Bayern Monachium");
    var basketballPlayer = new Athlete("Marcin", "Gortat", "35", "basketball", "Washington Wizards");
    var runner = new Athlete("Usain", "Bolt", "32", "running", "Kingston Tigers");
    var volleyballPlayer = new Athlete ("Matej", "Kazinsky", "38", "volleyball", "Jastrzębski Węgiel");
    var mmaFighter = new Athlete ("Marcin", "Różalski", "31", "mma", "Wisła Płock");
    
    athletes.module.addAthlete(footballPlayer);
    athletes.module.addAthlete(basketballPlayer);
    athletes.module.addAthlete(runner);
    athletes.module.addAthlete(volleyballPlayer);
    athletes.module.addAthlete(mmaFighter);
}

createAthleteList();

console.log("Sportowcy starsi niż 37 lat: ");
console.log(athletes.module.filterOlderThan(37));
console.log("Sportowcu o imieniu Marcin: ");
console.log(athletes.module.filterByFirstName("Marcin"));
