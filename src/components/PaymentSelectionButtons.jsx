import React from 'react';
import { GrayStyledButton, GrayStyledGreenButton } from './styledButtons';
import { Grid } from '@mui/material'

// Cashier during complete payment, payment selection button group for Modal.
const PaymentSelectionButtons = props => {
    const { completeSales, showModal } = props
    return(
        <React.Fragment>
            <Grid container sx={{ marginTop: '20px' }} spacing={1}>
                <Grid item xs={12} sm={6} align="left">
                    <GrayStyledButton fullWidth type="button" onClick={() => showModal('payment', false)}>Cancel</GrayStyledButton>
                </Grid>
                <Grid item xs={12} sm={3} align="right">
                    <GrayStyledGreenButton fullWidth type="button" onClick={() => completeSales(1)}>Card</GrayStyledGreenButton>
                </Grid>
                <Grid item xs={12} sm={3} align="right">
                    <GrayStyledGreenButton fullWidth type="button" onClick={() => completeSales(2)}>Cash</GrayStyledGreenButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default PaymentSelectionButtons;