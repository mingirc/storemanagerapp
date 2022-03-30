import { categories } from './categories'
import { inventoryHeaders } from './inventoryHeaders';
import { paymentMethods } from './paymentMethods';
import { products } from './products';
import { sales } from './sales';
import { salesHeaders } from './salesHeaders';
import { salesProductHeaders } from './salesProductHeaders';
import { users } from './users';
import { maxProductId, maxCategoryId, maxCashierItemId, maxSalesId } from './ids';

// All data imported in and exported from one file to shortened their directory
export { 
    products, 
    categories, 
    users, 
    sales, 
    paymentMethods, 
    maxProductId, 
    inventoryHeaders, 
    salesHeaders, 
    salesProductHeaders, 
    maxCategoryId, 
    maxCashierItemId, 
    maxSalesId 
}