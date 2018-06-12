import {Injectable} from '@angular/core';
import {Athlete} from '../model/athletes.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AthleteService {

  private athletes: Athlete[] = [];

  constructor(private http: HttpClient) {
  }

  saveAthlete(athlete: Athlete) {
    this.athletes.push(athlete);
  }

  getAthletes() {
    return this.athletes;
  }

  addAthletes(athlete: Athlete) {
    return this.http.post('http://127.0.0.1:5000/athletes', athlete);
  }

  deleteAthlete(athlete: Athlete) {
    return this.http.post('http://127.0.0.1:5000/deleteAthletes', athlete);
  }

  createAthleteList(data: any) {
    for (let item of data) {
      this.saveAthlete(item as Athlete);
    }
  }

}
