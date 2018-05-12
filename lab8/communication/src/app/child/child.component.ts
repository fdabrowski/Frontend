import { Person } from './../model/person';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() personToShow: Person;

  @Output() childChange = new EventEmitter<Person>();

  constructor() {}

  ngOnInit() {
  }

  informParent() {
    this.childChange.emit(this.personToShow);
  }

}
