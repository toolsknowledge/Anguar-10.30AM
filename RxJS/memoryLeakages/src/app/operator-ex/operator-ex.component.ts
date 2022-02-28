import { Component, OnInit } from '@angular/core';
import { interval,map } from 'rxjs';

@Component({
  selector: 'app-operator-ex',
  templateUrl: './operator-ex.component.html',
  styleUrls: ['./operator-ex.component.css']
})
export class OperatorExComponent implements OnInit {


  ob1$:any;


  constructor() { 
    this.ob1$ = interval(1000);
  }

  ngOnInit(): void {
      // this.ob1$.subscribe((posRes:number)=>{
      //     if(posRes % 2 == 0){
      //       console.log(posRes);
      //     }
      // })

      this.ob1$.pipe(map((posRes:any)=>{
          return posRes%2==0?posRes:""
      })).subscribe((res:any)=>{
          console.log(res);
      })




  }

}
