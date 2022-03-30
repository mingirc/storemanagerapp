import React from 'react';
import { Formik, Form } from 'formik';
import productSchema from '../../../../schemas/productSchema';
import { addProduct } from '../../../../actions';
import ProductForm from '../ProductForm';
import FormActionButtons from '../../../../components/FormActionButtons';
import withNavigationAndSubmit from '../../../../components/hocs/withSubmitWithNavigation';
import productListPath from '../productListPath';
import MyModal from '../../../../components/Modal';

const objectListPath = productListPath;

const ProductAdd = props => {

    const { navigateToList, onSubmit, maxProductId } = props

    const newProductInitialValues = {
        id: maxProductId + 1,
        categoryId: 'title',
        sku: '',
        name: '',
        price: '',
        imageUrl: '',
        stock: ''
    }

    return(
        <React.Fragment>
            <MyModal 
            open
            noAction
            cancelRouteStep={1}
            header={'Add Category'}
            content={
                <Formik
                    initialValues={newProductInitialValues}
                    validationSchema={productSchema}
                    onSubmit={onSubmit}
                    >
                    <Form>
                        <ProductForm />
                        <FormActionButtons navigateOnCancel={navigateToList}/>
                    </Form>
                </Formik>
            }
        />       
        </React.Fragment>
    )
}

export default withNavigationAndSubmit(
    ProductAdd,
    objectListPath,
    addProduct,
    'product',
    true,
    true
);
