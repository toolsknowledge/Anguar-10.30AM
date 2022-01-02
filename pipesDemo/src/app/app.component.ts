import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   var_one:string = "hello_1";
   var_two:string = "HELLO_1";
   var_three:number = 100;
   var_four:any = {"p_id":111,"p_name":"p_one","p_cost":10000};
   var_five:Date = new Date();
   var_six:number = 100.12345;
   var_seven:number[] = [10,20,30,40,50];
   var_eight:any;
   var_nine:number = 0.5;
   
   var_ten:string = "Praveen";
   
   constructor(){
     this.var_eight = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Hello");
        },5000);
     })
   }


   var11:string = "Angular13";
   var12:string = "to";
   var13:string = "welcome";



}
