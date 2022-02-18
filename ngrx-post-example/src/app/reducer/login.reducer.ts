import { createReducer, on } from "@ngrx/store";
import { loginAction, loginActionFail, loginActionSuccess } from "../actions/login.actions";
import LoginState from "../state/login.state";

const initialState:LoginState = {
    login:"",
    token:""
}

const _loginReducer = createReducer(initialState,on(loginAction,(state)=>{
    return{
        ...state,
        login:"",
        token:""
    }
}),on(loginActionSuccess,(state,action)=>{
    return{
        ...state,
        login:action.login,
        token:action.token
    }
}),on(loginActionFail,(state,action)=>{
    return{
        ...state,
        login:"fail",
        token:"",
        error:action.error
    }
}))

export function loginReducer(state:any,action:any){
    return _loginReducer(state,action);
}


