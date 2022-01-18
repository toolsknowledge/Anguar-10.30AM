import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pageone',
  templateUrl: './pageone.component.html',
  styles: [
  ]
})
export class PageoneComponent implements OnInit {

  var_one:string = "Page One !!!";

  constructor() { }

  ngOnInit(): void {
  }

}
