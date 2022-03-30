import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, INCREASE_PRODUCT_ID, SALES_FROM_STOCK } from './types'

export const addProduct = product => {
    return{
        type: ADD_PRODUCT,
        payload: { product }
    }
}

export const editProduct = product => {
    return{
        type: EDIT_PRODUCT,
        payload: { product }
    }
}

export const deleteProduct = productId => {
    return{
        type: DELETE_PRODUCT,
        payload: { productId }
    }
}

export const increaseProductId = () => {
    return{ type: INCREASE_PRODUCT_ID }
}

export const salesFromStock = saledProducts => {
    return{
        type: SALES_FROM_STOCK,
        payload: { saledProducts }
    }
}
