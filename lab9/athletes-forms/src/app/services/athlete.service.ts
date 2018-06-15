import {Injectable} from '@angular/core';
import {Athlete} from '../model/athletes.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AthleteService {

  private athletes: Athlete[] = [];
  index: number;

  constructor(private http: HttpClient) {
    this.getAthletesListFromServer();
    this.index = 0;
  }

  saveAthlete(athlete: Athlete) {
    this.athletes.push(athlete);
  }

  getAthletes() {
    return this.athletes;
  }

  getAthletesListFromServer() {
    this.http.get('http://127.0.0.1:5000/athletesList').subscribe(
      (data) => {
        this.createAthleteList(data);
      }
    );
  }

  addAthletes(athlete: Athlete) {
    return this.http.post('http://127.0.0.1:5000/addAthlete', athlete);
  }

  deleteAthlete(athlete: Athlete) {
    return this.http.post('http://127.0.0.1:5000/deleteAthlete', athlete);
  }

  createAthleteList(data: any) {
    this.athletes = [];
    for (let item of data) {
      this.saveAthlete(item as Athlete);
    }
  }

}
