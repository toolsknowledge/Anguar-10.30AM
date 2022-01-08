import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Comp1Component]
})
export class AppModule { }
