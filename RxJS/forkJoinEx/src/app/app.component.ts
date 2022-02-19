import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Demo1Service } from './services/demo1.service';
import { Demo2Service } from './services/demo2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  result1:any;
  result2:any;


  constructor(private service1:Demo1Service,
              private service2:Demo2Service){}
  ngOnInit(){
      forkJoin([this.service1.getCustomers(),this.service2.getData()]).subscribe((posRes)=>{
            this.result1 = posRes[0];
            this.result2 = posRes[1];
      },(errRes:HttpErrorResponse)=>{
          if(errRes.error instanceof Error){
            console.log("client side error");
          }else{
            console.log("server side error");
          }
      })
  }

}
