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

function changeNationality(athlete: Athlete, newNationality: string): void {
    athlete.nationality = newNationality;
}

let footballPlayer = new Athlete("Robert", "Lewandowski", 29, "POLSKA", "football", "Bayern Monachium");

console.log(footballPlayer);
changeNationality(footballPlayer, "NIMECY");
console.log(footballPlayer);