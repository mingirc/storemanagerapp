import React from 'react';
import { Field } from 'formik';
import { Grid, FormControl } from '@mui/material';
import { TextField } from 'formik-mui';
import withMobileTheme from '../../../components/hocs/withMobileTheme';

// Form that used in both add and edit category pages.
// Important: TextField came from 'formik-mui.
const CategoryForm = props => {

    const { isMobile } = props;

    return(
        <React.Fragment>
            <Field type="hidden" name="id" />
            <Grid container spacing={isMobile ? 1 : 3}>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <Field name="name" label="Category Name" component={TextField} size="small" /> 
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                <FormControl fullWidth >
                    <Field name="imageUrl" label="Image Url" component={TextField} size="small"  />
                </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withMobileTheme(CategoryForm);