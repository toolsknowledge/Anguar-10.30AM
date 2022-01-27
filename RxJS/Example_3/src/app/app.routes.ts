import { Routes } from "@angular/router";

const appRoutes:Routes = [{path:"",loadChildren:()=>import("./login.module").then((m)=>m.LoginModule)}];

export default appRoutes;