import { Component, OnInit, Input } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  @Input() public searchControl: FormControl = new FormControl();

  searchItems: string[] = []

  constructor() {
    this.searchControl.valueChanges.subscribe(
      searchTerm => this.searchItems.push(searchTerm)
    );
  }

  ngOnInit() {
  }

}
