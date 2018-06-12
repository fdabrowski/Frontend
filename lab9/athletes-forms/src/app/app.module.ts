import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AthleteFormComponent } from './components/athlete-form/athlete-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AthleteService} from './services/athlete.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AthletesDetailsComponent} from "./components/athletes-details/athletes-details.component";
import {AthletesListComponent} from "./components/athletes-list/athletes-list.component";
import {AthletesSearchComponent} from "./components/athletes-search/athletes-search.component";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'app-athlete-form', component: AthleteFormComponent},
  { path: 'list',      component: AthletesListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AthleteFormComponent,
    AthletesDetailsComponent,
    AthletesListComponent,
    AthletesSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    AthleteService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
