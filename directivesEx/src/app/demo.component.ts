import { Component } from "@angular/core";
@Component({
    selector : "demo",
    templateUrl:"./demo.component.html"
})
class DemoComponent{
    sub:string = "Angular";
    arr:any[] = [{'id':111,
                  'name':'Angular',
                  'demand':'High'},
                 {'id':222,
                 'name':'ReactJS',
                 'demand':'High'},
                 {'id':333,
                 'name':'VueJS',
                 'demand':'Medium'},
                 {'id':444,
                 'name':'NodeJS',
                 'demand':'High'},
                 {'id':555,
                 'name':'MongoDB',
                 'demand':'High'}];
    getColor(sub:string):any{
        switch(sub){
            case 'Angular':
                return "red";
            case 'ReactJS':
                return "yellow";
            case 'VueJS':
                return 'green';
            case 'NodeJS':
                return 'pink';
            case 'MongoDB':
                return 'blue';
            default:
                return 'black'
        }
    }
}
export default DemoComponent;
