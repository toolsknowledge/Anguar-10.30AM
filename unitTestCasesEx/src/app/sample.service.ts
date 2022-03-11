import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  add(arg1:number,arg2:number):number{
    return arg1+arg2;
  }



}
