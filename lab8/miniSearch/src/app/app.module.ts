import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
