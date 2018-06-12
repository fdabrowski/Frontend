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


  // add logic for deleting from list
  private delete(athlete: Athlete) {
      this.athleteService.deleteAthlete(athlete).subscribe(
        () => {
            this.athletesList = this.athleteService.getAthletes();
      });
  }

}
