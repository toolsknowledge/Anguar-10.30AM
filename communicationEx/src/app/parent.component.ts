import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  arr:any[];

  constructor() { 
    this.arr = [{"p_id":111,"p_name":"p_one","p_cost":10000},
                {"p_id":222,"p_name":"p_two","p_cost":20000},
                {"p_id":333,"p_name":"p_three","p_cost":30000},
                {"p_id":444,"p_name":"p_four","p_cost":40000},
                {"p_id":555,"p_name":"p_five","p_cost":50000}];
  }

  ngOnInit(): void {
  }

  myFun(data:any){
    alert(JSON.stringify(data));
  }




}
