import { createAction, props } from "@ngrx/store";
import ProductModel from "../model/product.model";
import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from "../types/products.types";

export const getProducts = createAction(GET_PRODUCTS);
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS,props<{"products":ProductModel[]}>());
export const getProductsFail = createAction(GET_PRODUCTS_FAIL,props<{"error":string}>());