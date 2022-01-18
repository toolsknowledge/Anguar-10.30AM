import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo1',
  templateUrl: './demo1.component.html',
  styles: [
  ]
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fun_one():string{
      return "Hello";
  }



}
