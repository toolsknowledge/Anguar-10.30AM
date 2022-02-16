import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import ProductsEffects from './effects/products.effects';
import { productsReducer } from './reducer/products.reducer';
import ProductsService from './services/products.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot({"products":productsReducer})
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
