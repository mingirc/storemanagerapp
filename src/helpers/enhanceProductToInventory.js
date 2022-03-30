// Enhance products with categoryName, price, total.  
// Which is used on Inventory Reports page.
const enhanceProductToInventory = (products, categories) => {
    const inventoryList = [];
    (products.length > 0 & categories.length > 0) &&
    products.map(product => {
        product.categoryName = categories.find(category => 
            category.id === parseInt(product.categoryId)).name
        product.price = parseFloat(product.price) * 1.00;
        product.total = 
        Math.round(parseFloat(product.stock * product.price) * 100) / 100 ;
        inventoryList.push(product)
    })
    return inventoryList;
}

export  default enhanceProductToInventory;

