import { store } from '../index';

// This helper sums the product's quantity on cashier items.
// This helps to compare product's total cashier quantity and the existing stock amount.
const distinctQty = (productId, salesQty) => {
    let cashierItems = store.getState().cashierItems
    let sameProductList = cashierItems.filter(item => 
        item.productId === productId && item.isActive)
    let totalQty = 0;
    sameProductList.map(product => totalQty += product.salesQty)
    totalQty += salesQty

    return { productId, totalQty }
}

export default distinctQty;