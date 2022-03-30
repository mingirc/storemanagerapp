import { ADD_SALE, INCREASE_SALES_ID } from './types';

export const addSale = sale => {
    return{
        type: ADD_SALE,
        payload: sale
    }
}

export const increaseSalesId = () => {
    return{ type: INCREASE_SALES_ID }
}