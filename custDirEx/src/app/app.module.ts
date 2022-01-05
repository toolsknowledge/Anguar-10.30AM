import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AshokitDirective } from './ashokit.directive';
import { AshokitngDirective } from './ashokitng.directive';


@NgModule({
  declarations: [
    AppComponent,
    AshokitDirective,
    AshokitngDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
