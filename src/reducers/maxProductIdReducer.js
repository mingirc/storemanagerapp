import { INCREASE_PRODUCT_ID } from '../actions/types';
import { maxProductId } from '../data';

const maxProductIdReducer = (maxId=maxProductId, action) => {
    switch(action.type){
        case INCREASE_PRODUCT_ID:
            return maxId += 1
        default:
            return maxId
    }
}

export default maxProductIdReducer;