import { Component } from "@angular/core";
import MyService from "./my.service";

@Component({
    selector:"comp2",
    templateUrl:"./comp2.component.html"
})
export default class Comp2Component{

    msg!:string;

    constructor(private service:MyService){}

    ngOnInit(){
       this.service.getData().subscribe((posRes)=>{
           this.msg = posRes;
       }) 
    }
}