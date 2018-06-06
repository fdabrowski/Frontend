import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AthleteService} from './services/athlete.service';

@NgModule({
  declarations: [
    AppComponent,
    AthleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AthleteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
