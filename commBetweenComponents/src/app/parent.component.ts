import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  msg1:any = "Hello_1";
  msg2:any = "Hello_2";
  msg3:any = "Hello_3";


  constructor() { }

  ngOnInit(): void {
  }

}
