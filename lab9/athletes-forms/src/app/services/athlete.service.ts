import { Injectable } from '@angular/core';
import {Athlete} from '../model/athletes.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AthleteService {

  private athletes: Athlete[] = [];

  constructor(private http: HttpClient) { }

  getAthletes(){
    return this.athletes;
  }

  addAthletes(athlete: Athlete){
    return this.http.post('http://127.0.0.1:5000/athletes', athlete);
  }

}
