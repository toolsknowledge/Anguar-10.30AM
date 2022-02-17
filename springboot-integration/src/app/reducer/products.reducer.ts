import { createReducer, on } from "@ngrx/store";
import { getProducts, getProductsFail, getProductsSuccess } from "../actions/products.action";

import ProductsState from "../state/products.state";

const initialState:ProductsState = {
    loading:false,
    products:[],
    error:""
}

const _productsReducer = createReducer(initialState,on(getProducts,(state)=>{
    return{
        ...state,
        loading:false,
        products:[],
        error:""
    } 
}), on(getProductsSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:action.products,
        error:""     
    }
}),on(getProductsFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:[],
        error:action.error     
    }
}))

export function productsReducer(state:any,action:any){
    return _productsReducer(state,action);
}

