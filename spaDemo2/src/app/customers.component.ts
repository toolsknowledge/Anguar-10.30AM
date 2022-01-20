import { Component } from "@angular/core";
import CustomersService from "./customers.service";

@Component({
    selector:"customers",
    templateUrl:"./customers.component.html"
})

export default class CustomersComponent{
   res:any;
   constructor(private service:CustomersService){}

   ngOnInit(){
       this.service.getCustomers().subscribe((posRes)=>{
           this.res = posRes;
       },(errRes)=>{
           console.log(errRes);
       });
   }
}