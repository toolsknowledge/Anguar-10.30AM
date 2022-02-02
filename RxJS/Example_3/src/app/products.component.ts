import { HttpErrorResponse } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import ProductsService from "./products.service";

@Component({
    selector : "products",
    templateUrl : "./products.component.html"
})
export default class ProductsComponent{
    result:any;
    dataSource:MatTableDataSource<any>;
    displayedColumns:string[] = ["_id","p_id","p_name","p_cost"];
    @ViewChild(MatPaginator) paginator:MatPaginator;
    @ViewChild(MatSort) sort:MatSort;

    constructor(private service:ProductsService){}

    applyFilter(data:any){
        this.dataSource.filter = data.value.trim().toLowerCase();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }  
    }



    ngOnInit(){
        this.service.getProducts().subscribe((posRes)=>{
            this.result = posRes;
            this.dataSource = new MatTableDataSource(this.result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");
            }else{
                console.log("server side error");
            }
        })
    }
}