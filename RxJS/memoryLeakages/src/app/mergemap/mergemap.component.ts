import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
      // of(1,2,3,20,4,5).pipe(mergeMap(num=> this.http.get(`http://localhost:8080/demo/${num}`))).subscribe((posRes)=>{
      //     console.log(posRes);
      // },(errRes)=>{
      //     console.log(errRes);
      // },()=>{
      //   console.log("Done !")
      // });

      of(1,2,3).pipe(concatMap((num)=> of(`Num....${num+1}`))).subscribe(console.log)
  }
}
