import { Injectable } from '@angular/core';
import {Athlete} from '../model/athletes.model';

@Injectable()
export class AthleteService {

  private athletes: Athlete[] = [];

  constructor() { }

  getAthletes(){
    return this.athletes;
  }

  addAthletes(athlete: Athlete){
    this.athletes.push(athlete);
    console.log(this.athletes);
  }

}
