import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector:"app-root",
  templateUrl:"./app.component.html",
  styleUrls:["./app.component.css"]
})
class AppComponent{

  records:any[];

  constructor(private http:HttpClient){
    this.records = [];
  }

  ngOnInit(){
      this.http.get("http://Ngbackend-env.eba-wcjaif5k.us-east-2.elasticbeanstalk.com/products").subscribe((posRes:any)=>{
          this.records = posRes;
      },(errRes:any)=>{
        console.log(errRes);
      })
  }
}
export default AppComponent;