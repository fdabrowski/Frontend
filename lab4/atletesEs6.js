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

class Athlete {

}