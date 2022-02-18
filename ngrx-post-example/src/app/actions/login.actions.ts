import { createAction, props } from "@ngrx/store";
import Login from "../model/login.data";
import LoginModel from "../model/login.model";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "../types/login.types";
export const loginAction = createAction(LOGIN,props<Login>())
export const loginActionSuccess = createAction(LOGIN_SUCCESS,props<LoginModel>());
export const loginActionFail = createAction(LOGIN_FAIL,props<{"error":string}>());