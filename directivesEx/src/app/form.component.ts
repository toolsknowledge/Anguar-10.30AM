import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  obj:any = {
    "uname":"",
    "upwd":""
  }

  status:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  myForm():any{
    console.log(this.obj);
    if(this.obj.uname == "ashokit" && this.obj.upwd == "ashokit"){
      this.status = "Login Success";
    }else{
      this.status = "Login Fail";
    }
  }



}
