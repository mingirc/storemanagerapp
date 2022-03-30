import { store } from '../index';

// Provides a stock check while adding product to the cashier list.
const checkStock = productToCheck => {
    const products = store.getState().products
    try{
        const productStock = products.find(product => 
            product.id === parseInt(productToCheck.productId)).stock
            
        if(productStock >= productToCheck.totalQty){
            return true;
        }else{
            return false;
        }
    }
    catch{
        return false;
    }
}

export default checkStock;