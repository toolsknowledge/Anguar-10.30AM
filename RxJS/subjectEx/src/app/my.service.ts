import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
@Injectable({
    providedIn:"root"
})
export default class MyService{
    subject:Subject<string> = new BehaviorSubject<string>("Hello");


    setData(msg:string){
        this.subject.next(msg);
    }

    getData():Observable<string>{
        return this.subject.asObservable();
    }

}