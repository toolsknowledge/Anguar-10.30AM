import {  HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import FakeData, { Fake } from "./fake.model";
import FakeService from "./fake.service";

@Component({
    selector : "fake",
    templateUrl : "./fake.component.html"
})

export default class FakeComponent{
    result:FakeData;
    arr:Fake[];
    constructor(private service:FakeService){}

    ngOnInit(){
        this.service.getFakeData().subscribe((posRes:FakeData)=>{
            const { data } = posRes;
            this.result = posRes;
            this.arr = data;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");
            }else{
                console.log("server side error");
            }
        })
    }
}