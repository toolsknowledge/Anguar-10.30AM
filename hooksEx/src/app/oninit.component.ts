import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'oninit',
  templateUrl: './oninit.component.html',
  styles: [
  ]
})
export class OninitComponent implements OnInit {

  msg:string = "";

  constructor(private obj:DemoService) { }

  ngOnInit(): void {
      this.msg = this.obj.fun_one();
  }

}
