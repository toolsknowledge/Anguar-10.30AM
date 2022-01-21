import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import appRoutes from './app.routes';
import AuthService from './auth.guard';
import MasterComponent from './master.component';
import PageoneComponent from './pageone.component';

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [MasterComponent]
})
export class AppModule { }
