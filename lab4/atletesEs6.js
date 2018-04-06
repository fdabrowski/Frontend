class Human {

    constructor(firstName, secondName, age, nationality){
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.nationality = nationality;
    }

    getFullName() {
        return this.firstName + " " + this.secondName
    }

    changeNationality(newNatonality) {
        this.nationality = newNatonality;
    }


}

class Athlete extends Human {
    constructor(firstName, secondName, age, nationality, discipline, club){
        super(firstName, secondName, age, nationality);
        this.discipline = discipline;
        this.club = club
    }

    getShortDescription() {
        return `My name is ${this.firstName} ${this.secondName}. I'm from ${this.nationality}. My club is ${this.club}.`
    }
}

let athletesList = [];
let robert = new Athlete("Robert", "Lewandowski", 29, "POLSKA", "football", "Bayern Monachium");

function createAthleteList () {
    let footballPlayer = new Athlete("Robert", "Lewandowski", 29, "POLSKA", "football", "Bayern Monachium");
    let basketballPlayer = new Athlete("Marcin", "Gortat", 35, "POLSKA", "basketball", "Washington Wizards");
    let runner = new Athlete("Usain", "Bolt", 32, "JAMAJKA", "running", "Kingston Tigers");
    let volleyballPlayer = new Athlete ("Matej", "Kazinsky", 38,"BUŁGARIA", "volleyball", "Jastrzębski Węgiel");
    let mmaFighter = new Athlete ("Marcin", "Różalski", 31, "POLSKA", "mma", "Wisła Płock");
    addToList(footballPlayer, basketballPlayer, runner, volleyballPlayer, mmaFighter);
}

function addToList(...athletes){
    athletes.forEach(element => {
        athletesList.push(element);
    });
}

function filterOlderThanAthlete(maxAge = 34) {
    return athletesList.filter(item => item.age > maxAge);
}

function changeNationalityOnPolish() {
    for (let athlete of athletesList){
        athlete.changeNationality("Polska")
    }
    return athletesList;
}

createAthleteList();
// console.log(filterOlderThanAthlete(35));
// console.log(filterOlderThanAthlete());
// console.log(changeNationalityOnPolish());
//console.log(robert.getShortDescription());