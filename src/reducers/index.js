import { combineReducers } from 'redux';
import productReducer from './productReducer'
import categoryReducer from './categoryReducer';
import salesReducer from './salesReducer';
import maxCategoryIdReducer from './maxCategoryIdReducer';
import maxProductIdReducer from './maxProductIdReducer';
import cashierReducer from './cashierReducer';
import maxCashierItemIdReducer from './maxCashierItemIdReducer';
import maxSalesIdReducer from './maxSalesIdReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    sales: salesReducer,
    cashierItems: cashierReducer,
    maxCategoryId: maxCategoryIdReducer,
    maxProductId: maxProductIdReducer,
    maxCashierItemId: maxCashierItemIdReducer,
    maxSalesId: maxSalesIdReducer,
    users: userReducer
})