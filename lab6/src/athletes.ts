interface Human {
    firstName: string;
    secondName: string;
    age: number;
    nationality: string;
}

class Person implements Human {
    public firstName: string;
    public secondName: string;
    public age: number;
    public nationality: string;

    constructor(firstName: string, secondName: string, age: number, nationality: string){
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.nationality = nationality;
    }
}

class Athlete extends Person {

    public discipline: string;
    public club: string;

    constructor(firstName: string, secondName: string, age: number, nationality: string, discipline: string, club: string){
        super(firstName, secondName, age, nationality);
        this.discipline = discipline;
        this.club = club;
    }

}

class AthletesClub {

    public athletes: Athlete[];

    constructor(){
        this.athletes = [];
    }

    addAthlete(athlete: Athlete){
        this.athletes.push(athlete);
    }

    removeAthlete(name: String) {
        this.athletes = this.athletes.filter( athlete => athlete.secondName !== name)
    }

    changeNationality(name: string, newNationality: string): void {
        let athlete = this.athletes
            .filter( athlete => athlete.secondName === name)
            .map(athlete => athlete.nationality = newNationality)
    }

    getOlderThan(value: number): Athlete[]{
        return this.athletes.filter( athlete => athlete.age > value);
    }

}

let footballPlayer = new Athlete("Robert", "Lewandowski", 29, "POLSKA", "football", "Bayern Monachium");
let footballPlayer1 = new Athlete("Jan", "Arnold", 19, "POLSKA", "football", "Bayern Monachium");
let footballPlayer2 = new Athlete("Rudy", "Bolek", 39, "POLSKA", "football", "Bayern Monachium");

let athleteClub = new AthletesClub();

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