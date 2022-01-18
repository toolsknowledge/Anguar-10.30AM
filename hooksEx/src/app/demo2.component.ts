import { Component, OnInit, ViewChild } from '@angular/core';
import { Demo1Component } from './demo1.component';

@Component({
  selector: 'demo2',
  template: `<demo1></demo1>`,
  styles: [
  ]
})
export class Demo2Component implements OnInit {

  @ViewChild(Demo1Component,{static:true})
  private demo1:Demo1Component;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
      console.log("both child and parent loaded in browser memory successfully !!!");
     
  }



}
