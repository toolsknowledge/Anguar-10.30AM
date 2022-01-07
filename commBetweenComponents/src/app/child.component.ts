import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() var_one:any;
  @Input() var_two:any;
  @Input() var_three:any;


  constructor() { }

  ngOnInit(): void {
  }

}
