import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  num:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
