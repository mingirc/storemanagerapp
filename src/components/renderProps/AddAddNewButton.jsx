import React from 'react';
import { Grid } from '@mui/material';
import CircularBlock from '../CircularBlock';

// This component adds a "Add New" CircularBlock at the beginning of the CircularList.
// Which used on categories and products pages.
const AddAddNewButton = props => {

    const { children } = props;

    return(
        <Grid
            container
            spacing={5}
            style={{ marginTop: '30px', paddingBottom: '80px' }}
            alignItems="center"
            justifyContent="flex-start"
        >
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
            <CircularBlock name={'Add New'} />
            </Grid>
            {children()}
  </Grid>
    )
}
export default AddAddNewButton;