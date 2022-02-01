import { Routes } from "@angular/router";

const appRoutes:Routes = [{path:"",loadChildren:()=>import("./login.module").then((m)=>m.LoginModule)},
                          {path:"dashboard",loadChildren:()=>import("./dashboard.module").then(m=>m.DashboardModule)}];

export default appRoutes;