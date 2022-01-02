import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AkhilPipe } from './akhil.pipe';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AkhilPipe,
    FormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
