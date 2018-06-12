import {Injectable} from '@angular/core';
import {Person} from './../model/person.model'
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PersonService {

  persons: Person[];

  constructor(private http: HttpClient) {
    this.persons = [new Person('Bolek', '1923'), new Person('Tola', '1983'), new Person('Lolek', '1963'), ];
  }

  getPersons(): Observable<Person[]>{
    return of(this.persons);
  }

  addPerson(person: Person){
    // this.persons.push(person);
    this.http.post('http://127.0.0.1:3000/person', person).subscribe(
      () =>{
        console.log('Successfully added!');
      },
      () => {
        console.log('Something goes wrong..')
      }
    );
  }

}
