import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    arr:any = [];
    ob1$:any;
    ob2$:any;
    sub1$:any;
    sub2$:any;
    timer:any;
   

    constructor(){
        this.ob1$ = new Observable((observer)=>{
            
            this.timer = setInterval(()=>{
              console.log("ob1$ data");
              observer.next("ob1");
            },1000);
            return ()=>{
              clearInterval(this.timer);
            }
        });
        this.ob2$ = new Observable((observer)=>{
            setInterval(()=>{
                observer.next("ob2");
            },1000);
        });
    }

    ngOnInit(){
        this.sub1$ = this.ob1$.subscribe((posRes:any)=>{
            console.log(posRes);
        },(errRes:any)=>{
            console.log(errRes);
        },()=>{
            console.log("Done !");
        });

        this.sub2$ = this.ob2$.subscribe((posRes:any)=>{
            this.arr.push(posRes);
        },(errRes:any)=>{
            console.log(errRes);
        },()=>{
          console.log( "Done 2 !");
        })



    }


    clickMe(){
      this.sub1$.unsubscribe();
      this.sub2$.unsubscribe();
    }






}
