import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp1',
  template: `<ng-content></ng-content>`,
  styles: [
  ]
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
