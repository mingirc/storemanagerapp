import { ADD_ITEM, UPDATE_ITEM_QTY, DELETE_ITEM, SOFT_DELETE_ITEM, INCREASE_CASHIER_ITEM_ID, CLEAR_CASHIER_LIST } from './types';

export const addCashierItem = saledItem => {
    return{
        type: ADD_ITEM,
        payload: { ...saledItem, isActive: true }
    }
}

export const updateCashierItemQty = updatedItem => {
    return{
        type: UPDATE_ITEM_QTY,
        payload: updatedItem
    }
}

export const deleteCashierItem = id => {
    return{
        type: DELETE_ITEM,
        payload: { id }
    }
}

export const softDeleteCashierItem = id => {
    return{
        type: SOFT_DELETE_ITEM,
        payload: { id }
    }
}

export const increaseCashierItemId = () => {
    return{ type: INCREASE_CASHIER_ITEM_ID }
}

export const clearCashierList = () => {
    return{ type: CLEAR_CASHIER_LIST }
}