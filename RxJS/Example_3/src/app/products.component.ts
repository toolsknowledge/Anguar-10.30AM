import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import ProductsService from "./products.service";

@Component({
    selector : "products",
    templateUrl : "./products.component.html"
})
export default class ProductsComponent{
    result:any;
    constructor(private service:ProductsService){}
    ngOnInit(){
        this.service.getProducts().subscribe((posRes)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");
            }else{
                console.log("server side error");
            }
        })
    }
}