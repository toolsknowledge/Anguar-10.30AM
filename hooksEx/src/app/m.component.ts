import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcomp',
  template: `<acomp>
                <bcomp></bcomp>
            </acomp>`,
  styles: [
  ]
})
export class MComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
