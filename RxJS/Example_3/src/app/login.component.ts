import { Component } from "@angular/core";
import LoginService from "./login.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector : "login",
    templateUrl : "./login.component.html"
})

export default class LoginComponent{
    obj:any = {"email":"","password":""}
    result:any;

    constructor(private service:LoginService,
                private route:Router){}

    login():any{
        this.service.loginFn(this.obj).subscribe((posRes)=>{
            this.result = posRes;
            if(posRes.login==="success"){
                window.localStorage.setItem("auth",JSON.stringify(posRes));
                this.route.navigate(["/dashboard"]);
            }
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");
            }else{
                console.log("server side error");
            }
        })
    }
}