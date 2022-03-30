import React from 'react';
import { Grid } from '@mui/material';
import { GrayStyledButton, GrayStyledGreenButton } from './styledButtons';
import withMobileTheme from './hocs/withMobileTheme';

// Submit forms (add/edit) action buttons.
const FormActionButtons = props => {

    const { isMobile } = props;

    return(
        <React.Fragment>
            <Grid container spacing={isMobile ? 1 : 3} sx={{ marginTop: '3%' }}>
                <Grid item md={6} sm={3} xs={0} ></Grid>
                <Grid item md={2} sm={3} xs={12} align="center">
                    <GrayStyledButton fullWidth type="Button" onClick={props.navigateOnCancel}>Cancel</GrayStyledButton>
                </Grid>
                <Grid item md={2} sm={3} xs={12} align="center">
                    <GrayStyledButton fullWidth type="reset">Reset</GrayStyledButton>
                </Grid>
                <Grid item md={2} sm={3} xs={12} align="center">
                    <GrayStyledGreenButton fullWidth type="submit">Submit</GrayStyledGreenButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withMobileTheme(FormActionButtons);