import { Component } from '@angular/core';
import { combineLatest, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'combineLatest';
    ob1$:any;
    ob2$:any;
    res2:any;
    res1:any;

    ngOnInit(){
       this.ob1$ = timer(2000,1000);
       this.ob2$ = timer(5000,3000);

       combineLatest([this.ob1$,this.ob2$]).subscribe((posRes:any)=>{
           console.log(posRes);

       })
    }
}
