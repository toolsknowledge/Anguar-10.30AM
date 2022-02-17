import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import ProductModel from "../model/product.model";
@Injectable({
    providedIn:"root"
})
export default class ProductsService{
    constructor(private http:HttpClient){}

    public getProducts():Observable<ProductModel[]>{
        return this.http.get<ProductModel[]>("http://localhost:5000/api/v1/products");
    }
}