import { INCREASE_CASHIER_ITEM_ID } from '../actions/types';
import { maxCashierItemId } from '../data';

const maxCashierItemIdReducer = (maxId=maxCashierItemId, action) => {
    switch(action.type){
        case INCREASE_CASHIER_ITEM_ID:
            return maxId += 1
        default:
            return maxId
    }
}

export default maxCashierItemIdReducer;