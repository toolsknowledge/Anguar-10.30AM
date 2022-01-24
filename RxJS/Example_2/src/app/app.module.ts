import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import FakeComponent from './fake.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FakeComponent]
})
export class AppModule { }
