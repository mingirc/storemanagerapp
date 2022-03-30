import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import {
  TextField,
  Autocomplete,
  FormControl,
  Grid,
} from '@mui/material';
import { 
  salesFromStock,
  addCashierItem, 
  clearCashierList,
  increaseCashierItemId,
  addSale,
  increaseSalesId
} from '../../actions';
import checkStock from '../../helpers/checkStock';
import distinctQty from '../../helpers/distinctSalesQty';
import CashierItemList from './CashierItemList';
import MyModal from '../../components/Modal';
import PaymentSelectionButtons from '../../components/PaymentSelectionButtons';
import { GrayStyledButton, GrayStyledGreenButton, GrayStyledRedButton } from '../../components/styledButtons';
import withMobileTheme from '../../components/hocs/withMobileTheme';
import CancelSalesButtons from '../../components/CancelSalesButtons';
import { paymentMethods } from '../../data';
import calculateSalesTotal from '../../helpers/calculateSalesTotal';
import { 
  formContainerStyle, 
  pageContainerStyle, 
  autoCompleteStyle, 
  addButtonGridStyle, 
  addButtonStyle,
  buttonGroupGridStyle,
  cancelButtonStyle,
  completeButtonStyle 
} from './Cashier.style';

const Cashier = props => {

  const {
    products,
    users,
    salesFromStock,
    addCashierItem,
    maxCashierItemId,
    increaseCashierItemId,
    cashierItems,
    clearCashierList,
    addSale,
    maxSalesId,
    increaseSalesId,
    isMobile
  } = props;
  const inputRef = useRef();
  const [ paymentModal, setPaymentModal ] = useState(false);
  const [ cancelModal, setCancelModal ] = useState(false)
  const [ warningModal, setWarningModal ] = useState({
    show: false,
    header: '',
    content: '',
    onClick: () => {}
  })

  // Warning modal objects.
  // Each one forms a generic modal with its properties.
  const warningModals = [
    {
      name: 'salesCompleted',
      header: 'Sales Completed',
      content: '',
      onClick: () => {
        showWarningModal('salesCompleted', false);
        clearCashierList();
      },
      show: false
    },
    {
      name: 'outOfStock',
      header: 'Not Enough Stock',
      content: 'This product has not got enough stock! Please update stock amount on product management page.',
      onClick: () => showWarningModal('outOfStock', false),
      show: false
    },
    {
      name: 'incorrectProduct',
      header: 'Select a Product',
      content: 'Please select a product from drop down list.',
      onClick: () => showWarningModal('incorrectProduct', false),
      show: false
    },
    {
      name: 'zeroQuantity',
      header: 'Need positive value',
      content: 'The quantity value of the items on the cashier list have to be positive. You can delete the item if you need.',
      onClick: () => showWarningModal('zeroQuantity', false),
      show: false
    },
  ]

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const onSubmit = (values, { resetForm }) => {
    // Find quantity total for the given product.
    const distinctItemQty = distinctQty(values.product.id, 1);
    // Check if stock available for this product.
    const hasStock = checkStock(distinctItemQty);
    // seperate id from product.
    let { id, ...productRest } = values.product; 

    // Add product to cashier list if it has stock.
    if (hasStock) {
      addCashierItem({
        id: maxCashierItemId + 1,
        salesQty: 1,
        isActive: true,
        productId: id,
        rowTotal: productRest.price,
        ...productRest,
      });
      increaseCashierItemId(); // increase cashier list max id.
    } else if(Object.keys(values.product).length === 0) {
        showWarningModal('incorrectProduct', true)
    } else {
      showWarningModal('outOfStock', true)
    }
    resetForm();
    inputRef.current.value = null;
    inputRef.current.focus();
  };

  // This function used for only "Ok" button warnings.
  // These modal objects include a onClick function as a property.
  const showWarningModal = (modalName, value) => {
    // find warning modal.
    let wm = warningModals.find(wm => wm.name === modalName)
    
    // set warning modal to state with given true/false show value.
    if(wm){
      wm.show = value
      setWarningModal({ ...wm })
    }
  }

  // this function used for more complicated Modals.
  // They include their own differentiated action buttons.
  const showModal = (modalName, value) => {
    switch (modalName) {
      case 'payment':
        setPaymentModal(value);
        break;
      case 'cancel':
        setCancelModal(value);
        break;
      default:
      // do nothing
    }
  };

  // Decrease sales amounts from stock.
  const updateStocks = () => {
    salesFromStock(cashierItems);
  };

  // Add cashier items and other properties to Sale list.
  // increase sale list max id +1.
  const completeSales = paymentMethodId => {
    updateStocks();
    const dateTime = new Date();
    addSale({
      id: maxSalesId + 1,
      userId: 2,
      userName: users.find(u => u.id === 2).name,
      paymentMethodId: paymentMethodId,
      paymentMethodName: paymentMethods.find(pm => 
        pm.id === paymentMethodId).name,
      dateTime: dateTime.toLocaleString(),
      salesTotal: calculateSalesTotal(cashierItems),
      productList: cashierItems,
    });
    increaseSalesId();
    showWarningModal('salesCompleted', true);
    showModal('payment', false);
  };

  const cancelSales = () => {
    clearCashierList();
    showModal('cancel', false);
  };

  const initialValues = { product: {} };

  return (
    <React.Fragment>
      <h1>Cashier</h1>
      <Grid container alignItems="flex-end" justifyContent="center" spacing={3} sx={pageContainerStyle}>
        <Grid item lg={6} md={8} xs={12}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ setFieldValue }) => (
              <Form>
                <Grid 
                  container sx={formContainerStyle} 
                  spacing={isMobile ? 0 : 3}
                >
                  <Grid item sm={8} xs={12}>
                  <FormControl sx={autoCompleteStyle}>
                    <Autocomplete
                      id="productId"
                      name="product"
                      size="small"
                      fullWidth
                      value={null}
                      options={products}
                      getOptionLabel={option => option.name}
                      onChange={(e, value) => {
                        setFieldValue(
                          'product',
                          value !== null ? value : initialValues.product
                        );
                      }}
                      renderInput={params => (
                        <TextField
                          margin="normal"
                          label="Products"
                          inputRef={inputRef}
                          fullWidth
                          name="product"
                          {...params}
                        />
                      )}
                    />
                    </FormControl>
                  </Grid>
                  <Grid item sm={4} xs={12} sx={addButtonGridStyle}>
                    <GrayStyledButton size="small" type="submit" sx={addButtonStyle}>
                      Add Item
                    </GrayStyledButton>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
          <CashierItemList showWarningModal={showWarningModal} />
        </Grid>
        <Grid item lg={2} md={8} xs={12} sx={buttonGroupGridStyle}>
            {cashierItems.length > 0 &&
            <React.Fragment>
                <GrayStyledRedButton type="button" onClick={() => showModal('cancel', true)} sx={cancelButtonStyle}>
                    Cancel
                </GrayStyledRedButton>
                <GrayStyledGreenButton type="button" onClick={() => showModal('payment', true)} sx={completeButtonStyle}>
                    Complete Sales
                </GrayStyledGreenButton>
            </React.Fragment>
            }
        </Grid>
      </Grid>

      {paymentModal && (
            <MyModal
              open
              header="Select a Payment Method"
              actions={
                <PaymentSelectionButtons
                  completeSales={completeSales}
                  showModal={showModal}
                />
              }
            />
          )}

          {cancelModal && (
            <MyModal
              open
              header="Do you want to cancel the sales?"
              actions={
                <CancelSalesButtons
                  cancelSales={cancelSales}
                  showModal={showModal}
                />
              }
            />
          )}

          {warningModal && warningModal.show && (
            <MyModal
              open
              header={warningModal.header}
              content={warningModal.content}
              cancelRouteStep={0}
              actions={
                <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                        <GrayStyledButton 
                            fullWidth 
                            type="button" 
                            onClick={warningModal.onClick}
                        > 
                        Ok
                        </GrayStyledButton>
                    </Grid>
                </Grid>
              }
            />
          )}

    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    cashierItems: state.cashierItems,
    maxCashierItemId: state.maxCashierItemId,
    maxSalesId: state.maxSalesId,
    users: state.users
  };
};

export default connect(mapStateToProps, {
  salesFromStock,
  addCashierItem,
  increaseCashierItemId,
  clearCashierList,
  addSale,
  increaseSalesId,
})(withMobileTheme(Cashier));
