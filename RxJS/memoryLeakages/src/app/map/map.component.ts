import { Component, OnInit } from '@angular/core';
import { map, mapTo, of, take ,first, skip, tap} from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      
      // of(1,2,3,4,5,6,7).pipe(map(val => val*10)).subscribe((posRes)=>{
      //     console.log(posRes);
      // },(errRes)=>{
      //   console.log(errRes);
      // },()=>{
      //     console.log("done !");
      // });
  
      // of(1,2,3,4).pipe(mapTo("Request !")).subscribe((posRes)=>{
      //   console.log(posRes);
      // },(errRes)=>{
      //   console.log(errRes);
      // },()=>{
      //   console.log("Done !");
      // });


    //of(1,2,3,4,5,6,7,8,9,10).pipe(take(5)).subscribe(console.log);
    //of(1,2,3,4,5,6,7,8,9,10).pipe(take(3)).subscribe(console.log);
    //of(1,2,3,4,5,6,7,8,9,10).pipe(first()).subscribe(console.log);
    //of(1,2,3,4,5).pipe(skip(2)).subscribe(console.log);


      // of(1,2,3,4,5,6,7,8,9,10).pipe(tap(val=>{
      //     console.log("Tap....",val*10)}), map(val=> val)
      // ).subscribe(console.log)


      
      this.http.get(`https://www.w3schools.com/angular/customers.php`).pipe(map((posRes:any)=>{
          const {records} = posRes;
          return records.map((element:any)=>{
              return{
                  Name : element.Name
              }
          });
      })).subscribe(console.log);







  
  }

}
