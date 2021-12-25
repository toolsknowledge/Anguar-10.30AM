import { Component } from "@angular/core";
@Component({
    selector:"ashokit-header",
    templateUrl:"./header.component.html",
    styleUrls:['./header.component.css']
})
class HeaderComponent{
    ashokitHeader():string{
        return "AshokIT";
    }
}
export default HeaderComponent;