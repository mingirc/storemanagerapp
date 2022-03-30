import { sales } from '../data';
import { ADD_SALE } from '../actions/types'

const salesReducer = (saleList=[ ...sales ], action) => {
    switch(action.type){
        case ADD_SALE:
            return [ ...saleList, action.payload ]
        default:
            return saleList
    }
}

export default salesReducer;