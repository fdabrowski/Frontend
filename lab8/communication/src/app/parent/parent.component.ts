import { Person } from './../model/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;

  constructor() {
    this.persons = [
      new Person('Bolek', 1878)
    , new Person('Lolek', 1967)
    , new Person('Tola', 1992)];
   }

  ngOnInit() {
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }

  childChanged(person: Person) {
    console.log(`child ${person.name} changed`);
  }

}
