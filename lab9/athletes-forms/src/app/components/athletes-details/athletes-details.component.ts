import {Component, Input, OnInit} from '@angular/core';
import {Athlete} from "../../model/athletes.model";

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
