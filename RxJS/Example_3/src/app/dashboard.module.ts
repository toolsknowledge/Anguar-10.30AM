import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import DashboardComponent from "./dashboard.component";
import ProductsComponent from "./products.component";
import ProductsService from "./products.service";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
@NgModule({
    declarations:[DashboardComponent,ProductsComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:ProductsComponent}]),
             MatTableModule,
             MatPaginatorModule,
             MatSortModule,
             MatFormFieldModule,
             MatInputModule],
    providers:[ProductsService],
    exports:[DashboardComponent]
})
export class DashboardModule{

}