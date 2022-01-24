import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import Customers from "./customers.model";
import CustomersService from "./customers.service";

@Component({
    selector : "customers",
    templateUrl : "./customers.component.html"
})
export default class CustomersComponent{

    result:any;

    constructor(private service:CustomersService){
    }

    ngOnInit(){
        this.service.getCustomers().subscribe((posRes:Customers)=>{
            const { records } = posRes;
           this.result = records;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");     
            }else{
                console.log("server side error");
            }
        })
    }
}