// All actions imported in and from one place. 
// So we call all actions just using /actions directory.

import { signIn, signOut } from './authActions';
import { addUser } from './userActions';
import { addSale, increaseSalesId } from './salesActions';

import { 
    addProduct, 
    editProduct, 
    deleteProduct, 
    increaseProductId, 
    salesFromStock 
} from './productActions';

import { 
    addCategory, 
    editCategory, 
    deleteCategory, 
    increaseCategoryId 
} from './categoryActions';

import {
    addCashierItem,
    updateCashierItemQty,
    deleteCashierItem,
    softDeleteCashierItem,
    increaseCashierItemId,
    clearCashierList
} from './cashierActions';

export { 
    addProduct, 
    editProduct,
    deleteProduct, 
    increaseProductId,
    salesFromStock,
    addCategory, 
    editCategory,
    deleteCategory, 
    increaseCategoryId,
    signIn, 
    signOut, 
    addUser,
    addCashierItem,
    updateCashierItemQty,
    deleteCashierItem,
    softDeleteCashierItem,
    increaseCashierItemId,
    clearCashierList,
    addSale,
    increaseSalesId
 }