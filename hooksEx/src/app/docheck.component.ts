import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docheck',
  templateUrl: './docheck.component.html',
  styles: [
  ]
})
export class DocheckComponent implements OnInit {

  arr:number[];



  constructor() { 
    this.arr = [1,2,3,4,5];
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    console.log("change detected in directive level");
  }

  clickMe(){
    this.arr.push(6);
  }



}
