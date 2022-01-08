import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp2',
  templateUrl: './comp2.component.html',
  styles: [
  ]
})
export class Comp2Component implements OnInit {

  var_one:string = "Hello_1";
  var_two:string = "Hello_2";


  constructor() { }

  ngOnInit(): void {
  }

}
