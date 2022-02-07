import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  registrationData:any = {"fname":"",
                          "lname":"",
                          "password":"",
                          "email":""};

  title = 'formsEx';
  step:number = 1;
  next():any{
    this.step = this.step+1;
  }
  previous():any{
    this.step = this.step-1;
  }
}
