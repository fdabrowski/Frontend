import { Component, OnInit } from '@angular/core';

import { Athlete } from './../../model/athlete';

@Component({
  selector: 'app-athletes-list',
  templateUrl: './athletes-list.component.html',
  styleUrls: ['./athletes-list.component.css']
})
export class AthletesListComponent implements OnInit {

  athletesList: Athlete[];

  constructor() {
    this.athletesList = [
      new Athlete('Adam', 'Malysz', 40, 'Ski Jumping', 'KS Wisla'),
      new Athlete('Jan', 'Malkowski', 20, 'Tennis', 'Warszawianka'),
      new Athlete('Olgierd', 'Malyszewski', 50, 'Chess', 'Chess Team Kokoszki'),
      new Athlete('Michal', 'Biela', 34, 'Running', 'Olimpia Grudziadz'),
      new Athlete('Adam', 'Komarnicki', 21, 'Speedway', 'KS Get Well Torun'),
      new Athlete('Jan', 'Kochanowski', 19, 'Ski Jumping', 'KS Wisla'),
      new Athlete('Jan', 'Komarewski', 28, 'Footbal', 'Wisla Krakow'),
      new Athlete('Antoni', 'Kolewski', 23, 'Football', 'Lechia Gdansk'),
      new Athlete('Adam', 'Bielewski', 16, 'Diving', 'Diving Team Gdynia'),
    ]
  }

  ngOnInit() {
  }

}
