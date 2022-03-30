import React from 'react';
import { connect } from 'react-redux';
import { 
    salesFromStock,
    addCashierItem, 
    deleteCashierItem, 
    updateCashierItemQty, 
    softDeleteCashierItem,
    increaseCashierItemId
} from '../../actions';
import checkStock from '../../helpers/checkStock';
import distinctQty from '../../helpers/distinctSalesQty';
import { Grid, Box, Typography } from '@mui/material';
import deleteIcon from '../../assets/images/delete.svg';
import plusIcon from '../../assets/images/plus-circle-line.svg';
import minusIcon from '../../assets/images/minus-circle-line.svg';
import calculateSalesTotal from '../../helpers/calculateSalesTotal';
import { 
    changeQuantityButtonStyle, 
    deleteButtonStyle, 
    quantityContainerStyle,
    imageOuterContainerStyle,
    cashierListInnerBoxStyle,
    imageInnerContainerStyle,
    imgStyle,
    cashierListContainerStyle,
    grandTotalContainerStyle,
    grandTotalSpanStyle
} from './CashierItemList.style';

const CashierItemList = props => {

    const {
        products, 
        updateCashierItemQty, 
        softDeleteCashierItem, 
        cashierItems, 
        showWarningModal
    } = props

    // To increase the quantity of cashier item.
    const onItemIncreaseQty = item => {
        const distinctItemQty = distinctQty(item.productId, 1)
        const hasStock = checkStock(distinctItemQty) // stock check.
        if(hasStock){
            item.salesQty += 1
            updateCashierItemQty(item)
        }else{
            showWarningModal('outOfStock', true)
        }
    }

    // To decrease the quantity of cashier item.
    const onItemDecreaseQty = item => {
        if(item.salesQty > 1){
            item.salesQty -= 1
            updateCashierItemQty(item)
        }else{
            showWarningModal('zeroQuantity', true)
        }
    }
    
    // To "soft" delete the cashier item.
    // Item continue to shown on list but degraded.
    const onItemDelete = itemId => {
        softDeleteCashierItem(itemId)
    }

    const renderCashierItems = () => {
        return (
            <React.Fragment>
                <Box sx={cashierListInnerBoxStyle}>
                {
                cashierItems.map(item => {
                let product = products.find(p => p.id === item.productId);
                return (
                    <Grid 
                        container 
                        key={item.id} 
                        alignItems="center" 
                        justifyContent="flex-start" 
                        sx={{
                            paddingBottom: '30px', 
                            textDecoration: item.isActive ? 'none' : 'line-through',
                            color: item.isActive ? '' : '#C4C4C4'
                            }}> 
                        <Grid item xs={2} sx={imageOuterContainerStyle}>
                        <Typography component="div" style={imageInnerContainerStyle}>
                            <img 
                            alt={product.name} 
                            src={product.imageUrl} 
                            style={{ ...imgStyle, opacity: item.isActive ? '1.0' : '0.3' }} />
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>{product.name}</Grid>
                        <Grid item xs={2} sx={quantityContainerStyle}>
                            <img 
                                src={minusIcon} 
                                style={{ ...changeQuantityButtonStyle, display: item.isActive ? 'block' : 'none' }} 
                                onClick={() => onItemDecreaseQty(item)}
                            />
                            {item.salesQty}
                            <img 
                                src={plusIcon} 
                                style={{ ...changeQuantityButtonStyle, display: item.isActive ? 'block' : 'none' }} 
                                onClick={() => onItemIncreaseQty(item)}
                            />
                        </Grid>
                        <Grid item xs={2} align="right">{product.price.toFixed(2)}</Grid>
                        <Grid item xs={2} align="right">{parseFloat(product.price * item.salesQty).toFixed(2)}</Grid>
                        <Grid item xs={1} align="center">
                            <img 
                                src={deleteIcon} 
                                style={{ ...deleteButtonStyle, display: item.isActive ? 'block' : 'none' }} 
                                onClick={() => onItemDelete(item.id)}
                            />
                        </Grid>
                    </Grid>
                    )
                })
                }
                </Box>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <div style={cashierListContainerStyle}>
                {renderCashierItems()}
            </div>
            <div style={grandTotalContainerStyle}>
                <span style={grandTotalSpanStyle}>{`Grand Total (£) : ${calculateSalesTotal(cashierItems).toFixed(2)}`}</span>
            </div>          
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return{
        products: state.products,
        cashierItems: state.cashierItems,
        maxCashierItemId: state.maxCashierItemId
    }
}

export default connect(mapStateToProps, {
    salesFromStock, 
    addCashierItem, 
    deleteCashierItem, 
    updateCashierItemQty, 
    softDeleteCashierItem, 
    increaseCashierItemId 
})(CashierItemList)