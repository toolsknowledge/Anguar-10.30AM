import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from './actions/login.actions';
import { loginSelector } from './selector/login.selector';
import LoginState from './state/login.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     login_data:any = {"email":"","password":""};

     constructor(private store:Store<LoginState>){
        this.store.select(loginSelector).subscribe((posRes:LoginState)=>{
            console.log(posRes);
        },(errRes:any)=>{
            console.log(errRes);
        })
     }


     login():any{
        this.store.dispatch(loginAction(this.login_data))
     }

     ngOnInit(){

     }




}
