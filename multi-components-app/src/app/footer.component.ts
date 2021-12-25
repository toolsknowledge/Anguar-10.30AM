import { Component } from "@angular/core";
@Component({
    selector:"ashokit-footer",
    templateUrl:"./footer.component.html",
    styleUrls:['./footer.component.css']
})
class FooterComponent{
    _footer():string{
        return "copyright@ashikit.in"
    }
}
export default FooterComponent;