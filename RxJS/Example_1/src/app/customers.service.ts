//import Injectable
//Injectable used to create the service
import { Injectable } from "@angular/core";


//import HttpClient
//HttpClient used to connect to server
import { HttpClient } from "@angular/common/http";


//import Observable
//Observable used to make the asynchronous calls
import { Observable } from "rxjs";


//import model
import Customers from "./customers.model";


@Injectable({
    providedIn:"root"
})
export default class CustomersService{
    constructor(private http:HttpClient){}

    public getCustomers():Observable<Customers>{
        return this.http.get<Customers>("https://www.w3schools.com/angular/customers.php");
    }
};


























