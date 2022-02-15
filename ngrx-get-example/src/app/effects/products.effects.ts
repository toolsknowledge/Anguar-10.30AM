import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { mergeMap,map, catchError, of } from "rxjs";
import { productsList, productsListFail, productsListSuccess } from "../actions/products.actions";
import Product from "../model/product.model";
import ProductsService from "../services/products.service";

@Injectable({
    providedIn:"root"
})
export default class ProductsEffects{
    constructor(private actions$:Actions,
                private service:ProductsService){}

    product$ = createEffect(()=> this.actions$.pipe(
        ofType(productsList),
        mergeMap(()=> this.service.getProducts().pipe(map((posRes:Product[])=>{
            return productsListSuccess({"products":posRes})
        }),catchError((err)=>of(productsListFail({"error":"Network Fail"})))) )
    ) );
        
 
}