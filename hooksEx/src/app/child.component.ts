import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() var_one:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange){
      console.log(changes);
  }



}
