import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperatorExComponent } from './operator-ex/operator-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorExComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OperatorExComponent]
})
export class AppModule { }
