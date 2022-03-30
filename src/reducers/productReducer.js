import { products } from '../data';
import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, SALES_FROM_STOCK } from '../actions/types';

const productReducer = (productList=[ ...products ], action) => {
    switch(action.type){
        case ADD_PRODUCT:
            productList.push(action.payload.product)
            return [ ...productList ];
        case EDIT_PRODUCT:{
            let editedProductList = []
            productList.map(product => {
                if(product.id === parseInt(action.payload.product.id)){
                    product = action.payload.product
                }
                    editedProductList = [ ...editedProductList, product ]
            })
            return [ ...editedProductList ]
        }
        case SALES_FROM_STOCK:
            // Decreases related products' stocks after payment approved.
            action.payload.saledProducts.forEach(saledProduct => {
                let product = productList.find(product => 
                    product.id === parseInt(saledProduct.productId));
                saledProduct.isActive && 
                (product.stock -= saledProduct.salesQty)
            });
            return [ ...productList ]
        case DELETE_PRODUCT:
            return [ ...productList.filter(product => 
                product.id !== parseInt(action.payload.productId)) ]
        default:
            return productList;
    }
}

export default productReducer;