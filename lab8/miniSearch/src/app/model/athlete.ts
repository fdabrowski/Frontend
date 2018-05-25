export class Athlete {

    firstName: string;
    secondName: string;
    age: number;
    dyscipline: string;
    club: string;
    nationality: string

    constructor(firstName: string, secondName: string, age: number, dyscipline: string, club: string, nationality: string) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.dyscipline = dyscipline;
        this.club = club;
        this.nationality = nationality;
    }
}
