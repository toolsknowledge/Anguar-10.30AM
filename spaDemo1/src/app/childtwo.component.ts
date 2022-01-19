import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childtwo',
  templateUrl: './childtwo.component.html',
  styles: [
  ]
})
export class ChildtwoComponent implements OnInit {

  var_five:string = "Child Two !!!";

  constructor() { }

  ngOnInit(): void {
  }

}
