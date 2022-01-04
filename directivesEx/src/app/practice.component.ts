import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'practice',
  templateUrl: './practice.component.html',
  styles: [
  ]
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  var_one:any = "Hello_1";

  arr:any[] = [
      {'cost':10000},
      {'cost':20000},
      {'cost':30000},
      {'cost':40000},
      {'cost':50000}
  ];

  getColor():any{
    return "blue"
  }


  num:number=0;

}
