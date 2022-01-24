import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import FakeData from "./fake.model";

@Injectable({
    providedIn:"root"
})

export default class FakeService{
    constructor(private http:HttpClient){}

    public getFakeData():Observable<FakeData>{
        return this.http.get<FakeData>("https://reqres.in/api/users?page=2");
    }
}