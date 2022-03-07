import { Component } from "@angular/core";
import MyService from "./my.service";
@Component({
    selector : "comp1",
    templateUrl : "./comp1.component.html"
})
export default class Comp1Component{

    constructor(private service:MyService){}

    send(msg:string){
        this.service.setData(msg);
    }

}