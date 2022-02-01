import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import DashboardComponent from "./dashboard.component";
import ProductsComponent from "./products.component";
import ProductsService from "./products.service";

@NgModule({
    declarations:[DashboardComponent,ProductsComponent],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:"",component:ProductsComponent}])],
    providers:[ProductsService],
    exports:[DashboardComponent]
})
export class DashboardModule{

}