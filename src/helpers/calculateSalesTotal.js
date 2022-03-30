// Calculates the grand total of cahier item list.
const calculateSalesTotal = items => {
    let salesTotal = 0;
    items.map(item => {
        item.isActive && (salesTotal += item.salesQty * item.price)
    })
    return salesTotal;
}

export default calculateSalesTotal;