import React from 'react';
import { Field } from 'formik';
import { TextField, Select } from 'formik-mui';
import { Grid, FormControl, MenuItem } from '@mui/material';
import withMobileTheme from '../../../components/hocs/withMobileTheme';
import { connect } from 'react-redux';

// The form used on both add and edit product pages.
// Important: TextField, Select came from 'formik-mui.
const ProductForm = props => {

    const { isMobile, categories } = props;

    const renderCategoryOptions = () => {
        return categories.map(category => {
            return (
                <MenuItem 
                    value={category.id} 
                    key={category.id}
                >
                    {category.name}
                </MenuItem>
            )
        })
    }

    return(
        <React.Fragment>
            <Field type="hidden" name="id" />
            <Grid container spacing={isMobile ? 1 : 3}>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <Field name="categoryId" label="Category" component={Select} size="small">
                            <MenuItem value="title" disabled>Select a category</MenuItem>
                            {renderCategoryOptions()}
                        </Field>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <Field name="sku" label="SKU" component={TextField} size="small"  />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <Field name="name" label="Product Name" component={TextField} size="small"  />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <Field name="price" label="Price" type="number" step="any" component={TextField} size="small"  />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <Field name="imageUrl" label="Image Url" component={TextField} size="small"  />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <Field name="stock" label="Stock Amount" type="number" step="1" component={TextField} size="small"  />
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return{ categories: state.categories }
}

export default connect(mapStateToProps)(withMobileTheme(ProductForm));