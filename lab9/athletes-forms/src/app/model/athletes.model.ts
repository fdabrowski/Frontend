export class Athlete {

    id: number
    firstName: string;
    secondName: string;
    age: number;
    disc: string;
    club: string;
    nationality: string;

    constructor(id: number, firstName: string, secondName: string, age: number, disc: string, club: string, nationality: string) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.disc = disc;
        this.club = club;
        this.nationality = nationality;
    }
}
