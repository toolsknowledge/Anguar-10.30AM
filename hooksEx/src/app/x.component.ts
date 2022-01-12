import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xcomp',
  template: `{{var_one}}`,
  styles: [
  ]
})
export class XComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public var_one:string = "hello";


}
