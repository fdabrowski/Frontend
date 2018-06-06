import { Injectable } from '@angular/core';
import { Person } from './../model/person.model'
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PersonService {

  persons: Person[];

  constructor() {
    this.persons = [new Person('Bolek', '1923'), new Person('Tola', '1983'), new Person('Lolek', '1963'), ];
  }

  getPersons(): Observable<Person[]>{
    return of(this.persons);
  }

  addPerson(person: Person){
    this.persons.push(person);
  }

}
