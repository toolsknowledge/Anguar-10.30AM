import { Component } from "@angular/core";
@Component({
    selector:"ashokit",
    templateUrl:"./first.component.html"
})
class FirstComponent{
    sub_one:string;
    sub_two:string;
    sub_three:string;
    constructor(){
        this.sub_one = "Angular13";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    }
    _frontEnd():string{
        return this.sub_one;
    }
    _backend():string{
        return this.sub_two;
    }
    _database():string{
        return this.sub_three;
    }
}
export default FirstComponent;