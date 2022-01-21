import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export default class AuthService{
    canLoad():boolean{
        return confirm("do you want to enter into Customers Module ?");
    }
}