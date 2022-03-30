import { INCREASE_SALES_ID } from '../actions/types';
import { maxSalesId } from '../data';

const maxSalesIdReducer = (maxId=maxSalesId, action) => {
    switch(action.type){
        case INCREASE_SALES_ID:
            return maxId += 1
        default:
            return maxId
    }
}

export default maxSalesIdReducer;