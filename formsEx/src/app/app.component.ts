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

  languages:any[] = [
      {name:"HTML"},
      {name:"Angular"},
      {name:"ReactJS"},
      {name:"VueJS"},
      {name:"NodeJS"}
  ];

  
  selected: any = null;
  
  gfg: any[] = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' }
  ];


  categories: any[] = [
                        {name: 'Angular13', key: 'A'}, 
                        {name: 'ReactJS', key: 'M'}, 
                        {name: 'VueJS', key: 'P'}, 
                        {name: 'NodeJS', key: 'R'}
                  ];


  checked: boolean = false;

  selectedCategories: any[] = [];

  ngOnInit(){
    this.selected = this.gfg[0];
    this.selectedCategories = this.categories.slice(0,1);
  }



}










