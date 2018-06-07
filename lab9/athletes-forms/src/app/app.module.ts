import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AthleteService} from './services/athlete.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AthleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AthleteService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
