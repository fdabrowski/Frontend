import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import { AthletesListComponent } from './components/athletes-list/athletes-list.component';
import { AthletesDetailsComponent } from './components/athletes-details/athletes-details.component';
import { AthletesSearchComponent } from './components/athletes-search/athletes-search.component';


@NgModule({
  declarations: [
    AppComponent,
    AthletesListComponent,
    AthletesDetailsComponent,
    AthletesSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
