import { Component } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'OperatorsEx';

    /*
    productsArray:any[] = [
        {"id":111,"name":"p_one","cost":10000},
        {"id":222,"name":"p_two","cost":20000},
        {"id":333,"name":"p_three","cost":30000},
        {"id":444,"name":"p_four","cost":40000},
        {"id":555,"name":"p_five","cost":50000}
    ]; 
    productsArray$:any;
    constructor(){
        this.productsArray$ = from(this.productsArray);
    }
    ngOnInit(){
        this.productsArray$.subscribe({
            next : (data:any)=>{ console.log(data) },
            error : (err:any)=>{ console.log(err) },
            complete : ()=>{ console.log("completed")}
        });
    };*/





    /*
      my_promise = new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve("i am from promises");
          },5000);
      })

      my_promise$:any;

      constructor(){
          this.my_promise$ = from(this.my_promise);
      }

      ngOnInit(){
        this.my_promise$.subscribe({
            next: (data:any)=>{ console.log(data) },
            error : (err:any)=>{ console.log(err) },
            complete : ()=>{ console.log("Done !!!") }
        })
      }
    */



      /*
      eventObservable$:any;
      ngAfterViewInit(){
        this.eventObservable$.subscribe({
          next : (data:any)=>{ console.log(data) },
          error : (err:any) =>{ console.log(err) },
          complete : ()=>{ console.log("Done !!!") }
      })  
      }

      ngOnInit(){
        this.eventObservable$ = fromEvent( document.getElementById("click-me")!, "click" );
        
      }
      */




      customObservables$ = new Observable((observer)=>{
          let timer = 5000;
          for(let i=0;i<5;i++){
              setTimeout(()=>{
                  console.log(i);
              },timer+1000);
          }
      })

      ngOnInit(){
        this.customObservables$.subscribe({
            next:(data)=>{ console.log(data) },
            error:(err:any)=>{ console.log(err) },
            complete:()=>{ console.log("Done !!!") }
        })
      }









































}
