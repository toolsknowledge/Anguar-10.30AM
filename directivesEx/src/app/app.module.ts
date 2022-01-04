import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import DemoComponent from './demo.component';
import { PracticeComponent } from './practice.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PracticeComponent]
})
export class AppModule { }
