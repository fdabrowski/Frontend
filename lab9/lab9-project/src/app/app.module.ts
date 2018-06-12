import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PersonComponent} from './components/person/person.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PersonService} from './services/person.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PersonService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
