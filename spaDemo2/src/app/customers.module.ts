import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import CustomersComponent from "./customers.component";
import CustomersService from "./customers.service";

@NgModule({
    declarations:[CustomersComponent],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:"",component:CustomersComponent}])],
    providers:[CustomersService],
    exports:[CustomersComponent]
})
export class CustomersModule{}