import React from 'react';
import './DeleteActionButtons.css';
import { GrayStyledButton, GrayStyledRedButton } from './styledButtons';
import { Grid } from '@mui/material';
import withMobileTheme from './hocs/withMobileTheme';

// Button group used for delete action on Modals.
const DeleteActionButtons = props => {

    const { onDeleteClick, onCancelClick, isMobile } = props;

    return(
        <React.Fragment>
            <Grid container spacing={isMobile ? 1 : 3} sx={{ marginTop: '3%' }}>
                    <Grid item md={8} sm={6} xs={0} ></Grid>
                    <Grid item md={2} sm={3} xs={12} align="center">
                        <GrayStyledButton fullWidth type="Button" onClick={onCancelClick}>Cancel</GrayStyledButton>
                    </Grid>
                    <Grid item md={2} sm={3} xs={12} align="center">
                        <GrayStyledRedButton fullWidth type="button" onClick={onDeleteClick}>Delete</GrayStyledRedButton>
                    </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withMobileTheme(DeleteActionButtons);