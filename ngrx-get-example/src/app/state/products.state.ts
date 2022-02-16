import Product from "../model/product.model";

interface ProductsState{
    loading : boolean;
    products : Product[],
    error : string;
}
export default ProductsState;