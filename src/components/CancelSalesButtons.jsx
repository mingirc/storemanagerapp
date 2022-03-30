import React from 'react';
import { GrayStyledButton, GrayStyledRedButton } from './styledButtons';
import { Grid } from '@mui/material'

// Button group used for cashier sales cancellation on Modal.
const CancelSalesButtons = props => {
    const { cancelSales, showModal } = props
    return(
        <React.Fragment>
            <Grid container sx={{ marginTop: '20px' }} spacing={1} justifyContent="flex-end">
                <Grid item xs={12} sm={3} align="right">
                    <GrayStyledButton fullWidth type="button" onClick={() => showModal('cancel', false)}>Back</GrayStyledButton>
                </Grid>
                <Grid item xs={12} sm={3} align="right">
                    <GrayStyledRedButton fullWidth type="button" style={{ whiteSpace: 'nowrap' }} onClick={() => cancelSales()}>Continue</GrayStyledRedButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CancelSalesButtons;