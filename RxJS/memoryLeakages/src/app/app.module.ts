import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperatorExComponent } from './operator-ex/operator-ex.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OperatorExComponent,
    MapComponent,
    SwitchmapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SwitchmapComponent]
})
export class AppModule { }
