import {Component, Input, OnInit} from '@angular/core';
import {Athlete} from '../../model/athlete';

@Component({
  selector: 'app-athletes-details',
  templateUrl: './athletes-details.component.html',
  styleUrls: ['./athletes-details.component.css']
})
export class AthletesDetailsComponent implements OnInit {

  @Input() athlete: Athlete;

  constructor() { }

  ngOnInit() {
  }

}
