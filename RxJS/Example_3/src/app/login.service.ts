import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn : "root"
})
export default class LoginService{
    constructor(private http:HttpClient){}
    public loginFn(login_details:any):Observable<any>{
        return this.http.post("http://localhost:8080/login",login_details);
    }
}