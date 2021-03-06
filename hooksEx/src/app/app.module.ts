import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { DocheckComponent } from './docheck.component';
import { OninitComponent } from './oninit.component';
import { BComponent } from './b.component';
import { AComponent } from './a.component';
import { MComponent } from './m.component';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';
import { XComponent } from './x.component';
import { YComponent } from './y.component';
import { Demo1Component } from './demo1.component';
import { Demo2Component } from './demo2.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DocheckComponent,
    OninitComponent,
    BComponent,
    AComponent,
    MComponent,
    Comp1Component,
    Comp2Component,
    XComponent,
    YComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Demo2Component]
})
export class AppModule { }
