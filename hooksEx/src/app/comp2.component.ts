import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp2',
  template: `<comp1>{{data}}</comp1>`,
  styles: [
  ]
})
export class Comp2Component implements OnInit {

  data:any = "hello";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    console.log("comp2 able to render the data to comp1 with ng-content directive");
  }

}
