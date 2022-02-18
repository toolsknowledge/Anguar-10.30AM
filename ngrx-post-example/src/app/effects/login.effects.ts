import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap,map, of } from "rxjs";
import { loginAction, loginActionFail, loginActionSuccess } from "../actions/login.actions";
import LoginModel from "../model/login.model";
import LoginService from "../services/login.service";

@Injectable({
    providedIn:"root"
})
export default class LoginEffects{
    constructor(private actions$:Actions,
                private service:LoginService){}


    login$ = createEffect(()=> this.actions$.pipe(
        ofType(loginAction),
        mergeMap((action:any)=> this.service.loginFn({"email":action.email,"password":action.password}).pipe(map((posRes:LoginModel)=>{
            return loginActionSuccess(posRes);
        }),catchError((errRes)=>of(loginActionFail({"error":"Network Fail"})))))
    ))
}