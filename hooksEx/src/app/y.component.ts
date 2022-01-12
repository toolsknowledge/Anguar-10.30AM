import { Component, OnInit, ViewChild } from '@angular/core';
import { XComponent } from './x.component';

@Component({
  selector: 'ycomp',
  templateUrl: './y.component.html',
  styles: [
  ]
})
export class YComponent implements OnInit {

  @ViewChild(XComponent,{static:false})  
  public obj1:XComponent;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

      setInterval(()=>{
         this.obj1.var_one;
      },1000);
  }



}
