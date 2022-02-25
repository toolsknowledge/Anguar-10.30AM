import { Component } from '@angular/core';
import { from } from 'rxjs';
import MyClass from './my_class';
import myFun from './my_fun';
import { my_observable } from './my_observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SubscribeWays';
    arr:any[] = [
        {"p_id":111,"p_name":"p_one","p_cost":10000},
        {"p_id":222,"p_name":"p_two","p_cost":20000},
        {"p_id":333,"p_name":"p_three","p_cost":30000},
        {"p_id":444,"p_name":"p_four","p_cost":40000},
        {"p_id":555,"p_name":"p_five","p_cost":50000}
    ];
    arr$:any;

    observer:any = {
      next:(posRes:any)=>{ console.log(posRes) },
      error:(errRes:any)=>{ console.log(errRes) },
      complete:()=>{ console.log("completed !") }
   };

   subscription$:any;

    constructor(){
        this.arr$ = from(this.arr);
    }
    ngOnInit(){

          /*
            //subscribe-1
            this.arr$.subscribe({
                next : (data:any)=>{ console.log(data) },
                error : (err:any) =>{ console.log(err) },
                complete : ()=>{ console.log("Completed !") }
            });
          */

          /*
            //subscribe-2
            this.arr$.subscribe((posRes:any)=>{
              console.log(posRes);
            },(errRes:any)=>{
              console.log(errRes);
            },()=>{
              console.log("Completed !");
            });
          */


          /*
            //subscribe-3       
            this.arr$.subscribe(this.observer);
          */


            //subscribe-4
            /*
              this.arr$.subscribe( new MyClass() );
            */



            //subscribe
            // this.subscription$ = this.arr$.subscribe((posRes:any)=>{
            //   console.log(posRes);
            // },(errRes:any)=>{
            //   console.log(errRes);
            // });

            /*
              console.log( myFun() );
              console.log( myFun() );
            */


            my_observable.subscribe((posRes:number)=>{
              console.log(posRes);
            },(errRes:any)=>{
              console.log(errRes);
            })










    }

    ngOnDestroy(){
       //this.subscription$.unsubscribe();
    }


}
