import { maxCategoryId } from '../data';
import { INCREASE_CATEGORY_ID } from '../actions/types';

const maxCategoryIdReducer = (maxId = maxCategoryId, action) => {
    switch(action.type){
        case INCREASE_CATEGORY_ID:
            return maxId += 1
        default:
            return maxId
    }
}

export default maxCategoryIdReducer;