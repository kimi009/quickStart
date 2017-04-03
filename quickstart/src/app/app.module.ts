import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ClickMeComponent} from "./click-me";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ClickMeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
