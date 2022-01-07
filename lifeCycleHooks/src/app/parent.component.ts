import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
      //first life cycle hook
      //only once
      //business logic  (main)    //calling the services..........
 
  }

  num:number = 0;


  arr:number[] = [1,2,3,4,5];

  changeArr():any{
    this.arr.push(10);
  }


  ngDoCheck(){
      console.log("change detected in directive")
  }


 



}
