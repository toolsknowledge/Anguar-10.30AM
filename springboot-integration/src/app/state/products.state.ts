import ProductModel from "../model/product.model";
interface ProductsState{
    loading:boolean;
    products:ProductModel[];
    error:string;
}
export default ProductsState;