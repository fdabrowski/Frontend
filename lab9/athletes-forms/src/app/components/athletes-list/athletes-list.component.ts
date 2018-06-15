import {Component} from '@angular/core';
import {Athlete} from "../../model/athletes.model";
import {AthleteService} from "../../services/athlete.service";

@Component({
  selector: 'app-athletes-list',
  templateUrl: './athletes-list.component.html',
  styleUrls: ['./athletes-list.component.css']
})
export class AthletesListComponent {

  athletesList: Athlete[];

  constructor(private athleteService: AthleteService) {
    this.athletesList = this.athleteService.getAthletes();
  }

  deleteFromList(athlete: Athlete) {
      this.athleteService.deleteAthlete(athlete).subscribe(
        (data) => {
            this.athleteService.createAthleteList(data);
            this.athletesList = this.athleteService.getAthletes();
      });
  }

}
