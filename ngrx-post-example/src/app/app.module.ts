import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import LoginEffects from './effects/login.effects';
import { loginReducer } from './reducer/login.reducer';
import LoginService from './services/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([LoginEffects]),
    StoreModule.forRoot({"login":loginReducer})
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
