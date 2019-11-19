import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FancyText } from './fancy-text/fancy-text.component';

import { FancyCheckbox } from './fancy-checkbox/fancy-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyText,
    FancyCheckbox
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
