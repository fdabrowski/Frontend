import {Component, OnInit} from '@angular/core';
import {Athlete} from '../athlete';
import {ATHLETESS} from '../mock-athlete';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {

  athletes: Athlete[] = ATHLETESS;
  selectedAthlete: Athlete;

  constructor() {
    this.selectedAthlete = ATHLETESS[1];
  }

  ngOnInit() {
  }

  onSelect(athlete: Athlete) {
    this.selectedAthlete = athlete;
  }

}
