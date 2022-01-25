import { Component } from "@angular/core";
import LoginService from "./login.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector : "login",
    templateUrl : "./login.component.html"
})

export default class LoginComponent{
    obj:any = {"email":"","password":""}
    result:any;


    constructor(private service:LoginService){}

    login():any{
        this.service.loginFn(this.obj).subscribe((posRes)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");
            }else{
                console.log("server side error");
            }
        })
    }
}