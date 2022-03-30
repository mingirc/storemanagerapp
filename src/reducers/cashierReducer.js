import { ADD_ITEM, UPDATE_ITEM_QTY, DELETE_ITEM, SOFT_DELETE_ITEM, CLEAR_CASHIER_LIST } from '../actions/types';

const cashierReducer = (cashierItems=[], action) => {
    switch(action.type){
        case ADD_ITEM:
            return [ ...cashierItems, action.payload ]
        case UPDATE_ITEM_QTY:{
            let item = cashierItems.find(item => item.id === action.payload.id)
            // replace product's quantity with payload's quantity.
            item.salesQty = action.payload.salesQty 
            // calculate row total
            item.rowTotal = action.payload.salesQty * action.payload.price
            return [ ...cashierItems ]
        }
        case DELETE_ITEM:
            return [ ...cashierItems.filter(item => 
                item.id !== action.payload.id) ]
        case SOFT_DELETE_ITEM:{
            // Just change items isActive property, not actually delete.
            let softDeleteItem = cashierItems.find(item => 
                item.id === action.payload.id)
            softDeleteItem.isActive = false
            return [ ...cashierItems ]
        }
        case CLEAR_CASHIER_LIST:
            return []
        default:
            return cashierItems;
    }
}

export default cashierReducer;
