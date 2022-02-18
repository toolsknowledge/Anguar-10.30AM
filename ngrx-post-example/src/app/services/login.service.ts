import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import LoginModel from "../model/login.model";
import Login from "../model/login.data";




@Injectable({
    providedIn:"root"
})
export default class LoginService{
    constructor(private http:HttpClient){}
    public loginFn(login_details:Login):Observable<LoginModel>{
        return this.http.post<LoginModel>(`http://localhost:8080/login`,login_details);
    }
}