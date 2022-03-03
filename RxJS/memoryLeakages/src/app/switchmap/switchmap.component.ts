import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, interval, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  serach!:any;

  constructor() {
    this.serach = new FormControl("")
   }

  ngOnInit(): void {
      //fromEvent(document,"click").pipe(switchMap(()=>interval(1000))).subscribe((val)=> console.log(val))
  
    this.serach.valueChanges.pipe( debounceTime(1000), switchMap(()=> interval(1000))).subscribe(console.log);


  }

}
