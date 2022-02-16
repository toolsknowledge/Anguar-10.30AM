import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsList } from './actions/products.actions';
import Product from './model/product.model';
import { productsSelector } from './selector/products.selector';
import ProductsState from './state/products.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    loading:boolean;
    products:Product[];
    error:string;

    constructor(private store:Store<ProductsState>){
        this.loading = false;
        this.products = [];
        this.error = "";      
    }

    ngOnInit(){
        this.store.select(productsSelector).subscribe((posRes:ProductsState)=>{
            const {loading,products,error} = posRes;
            this.loading = loading;
            this.products = products;
            this.error = error;
        })


        this.store.dispatch(productsList());




    }



}
