import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})

export default class CustomersService{
    constructor(private http:HttpClient){}

    public getCustomers():Observable<any>{
        return this.http.get("https://www.w3schools.com/angular/customers.php");
    }
}