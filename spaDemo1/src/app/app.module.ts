import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { PageoneComponent } from './pageone.component';
import { PagetwoComponent } from './pagetwo.component';
import { PagethreeComponent } from './pagethree.component';
import { RouterModule } from '@angular/router';
import { ChildoneComponent } from './childone.component';
import { ChildtwoComponent } from './childtwo.component';
import { ChildthreeComponent } from './childthree.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {path:"",component:PageoneComponent,children:[{path:"child_one",component:ChildoneComponent}]},
       {path:"page_two/:p_id/:p_name/:p_cost",component:PagetwoComponent,children:[{path:"child_two",component:ChildtwoComponent}]},
       {path:"page_three/:x/:y/:z",component:PagethreeComponent,children:[{path:"child_three",component:ChildthreeComponent}]}
    ])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }






