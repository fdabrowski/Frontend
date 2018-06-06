import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {PersonService} from '../../services/person.service';
import {Person} from '../../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myGroup: FormGroup;
  imie: AbstractControl;
  rokUr: AbstractControl;

  constructor(private personService: PersonService,
              fb: FormBuilder) {
    this.myGroup = fb.group({
      'imie': ['Podaj imię', Validators.compose(
        [ Validators.required, Validators.minLength(3), this.myImieValidator]
      )],

      'rokUr': ['Podaj rok urodzenia', Validators.compose(
        [ Validators.max(2000) ]
      )]
    });

    this.imie = this.myGroup.controls['imie'];
    this.rokUr = this.myGroup.controls['rokUr'];


    this.myGroup.controls['imie'].valueChanges.subscribe(
      (imie) => console.log(imie)
    );
  }

  myImieValidator(control: FormControl){
      if(control.value.match(/^Bol/i)){
        return {
          'bolekValue': true
        }
      }
  }

  ngOnInit() {
  }

  mySubmit(value: any) {
    const person = new Person(this.imie.value, this.rokUr.value);
    this.personService.addPerson(person);
    this.personService.getPersons().subscribe(
      person => console.log(person)
    );
  }

}
