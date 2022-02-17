import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { mergeMap,map, catchError, of } from "rxjs";
import { getProducts, getProductsFail, getProductsSuccess } from "../actions/products.action";
import ProductModel from "../model/product.model";
import ProductsService from "../services/products.service";

@Injectable({
    providedIn:"root"
})
export default class ProductsEffects{
    constructor(private actions$:Actions,
                private service:ProductsService){}


    products$ = createEffect(()=> this.actions$.pipe(
        ofType(getProducts),
        mergeMap(()=> this.service.getProducts().pipe(map((posRes:ProductModel[])=>{
            return getProductsSuccess({"products":posRes})
        }),catchError((errRes)=>of(getProductsFail({"error":"Network Fail"})))) )
    ) )
}