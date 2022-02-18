import { createFeatureSelector, createSelector } from "@ngrx/store";
import LoginState from "../state/login.state";

export const loginSelector = createSelector(createFeatureSelector<LoginState>("login"),(state)=>{
    return state;
})