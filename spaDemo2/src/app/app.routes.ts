import { Routes } from "@angular/router";
import AuthService from "./auth.guard";
import PageoneComponent from "./pageone.component";

const appRoutes:Routes = [{path:"page_one",component:PageoneComponent},
                          {path:"lazy",loadChildren:()=>import("./customers.module").then(res=>res.CustomersModule),canLoad:[AuthService]}];


export default appRoutes;