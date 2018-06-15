import {Component, OnInit} from '@angular/core';
import {AthleteService} from '../../services/athlete.service';
import {Athlete} from 'app/model/athletes.model';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteFormComponent implements OnInit {

  myGroup: FormGroup;
  formFirstName: AbstractControl;
  formSecondName: AbstractControl;
  formAge: AbstractControl;
  formDiscipline: AbstractControl;
  formClub: AbstractControl;
  formNationality: AbstractControl;
  isOK: boolean;
  isFailed: boolean;


  constructor(private athleteService: AthleteService,
              private fb: FormBuilder) {
    this.setUpForm();
    this.setInputs();
  }

  ngOnInit() {
  }

  private setUpForm() {
    this.myGroup = this.fb.group({
      'firstName': ['', Validators.compose(
        [Validators.required, this.namesValidator]
      )],
      'secondName': ['', Validators.compose(
        [Validators.required, this.namesValidator]
      )],
      'age': ['', Validators.compose(
        [Validators.required, Validators.max(50), Validators.min(12)]
      )],
      'discipline': ['', Validators.compose(
        [Validators.required, Validators.minLength(2)]
      )],
      'club': ['', Validators.compose(
        [Validators.required, Validators.minLength(3)]
      )],
      'nationality': ['', Validators.compose(
        [Validators.required, Validators.minLength(3), this.namesValidator]
      )],
    });
  }

  private namesValidator(control: FormControl) {
    if (control.value.match(/[^a-zA-Z,-]/i)) {
      return {
        'isNameValid': true
      };
    }
  }

  private setInputs() {
    this.formFirstName = this.myGroup.controls['firstName'];
    this.formSecondName = this.myGroup.controls['secondName'];
    this.formAge = this.myGroup.controls['age'];
    this.formDiscipline = this.myGroup.controls['discipline'];
    this.formClub = this.myGroup.controls['club'];
    this.formNationality = this.myGroup.controls['nationality'];
  }

  private createPerson() {
    return new Athlete(
      this.athleteService.index,
      this.formFirstName.value,
      this.formSecondName.value,
      this.formAge.value,
      this.formDiscipline.value,
      this.formClub.value,
      this.formNationality.value);
  }

  onSubmit() {
    this.athleteService.addAthletes(this.createPerson()).subscribe(
      (data) => {
        console.log(data);
        this.athleteService.createAthleteList(data);
        this.isOK = true;
        this.isFailed = false;
        this.athleteService.index = this.athleteService.index + 1;
      },
      () => {
        this.isFailed = true;
        this.isOK = false;
      },
      () => {
        setTimeout( () =>{
          this.isFailed = false;
          this.isOK = false;
      }, 5000)
      }
    );
  }

}
