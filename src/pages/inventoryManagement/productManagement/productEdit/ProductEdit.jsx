import React from 'react';
import productSchema from '../../../../schemas/productSchema';
import ProductForm from '../ProductForm';
import { Formik, Form } from 'formik';
import { editProduct } from '../../../../actions';
import FormActionButtons from '../../../../components/FormActionButtons';
import withNavigationAndSubmit from '../../../../components/hocs/withSubmitWithNavigation';
import productListPath from '../productListPath';
import MyModal from '../../../../components/Modal';

const objectListPath = productListPath;

const ProductEdit = props => {

    const { id, navigateToList, onSubmit, products }  = props
    
    const product = products.find(p => p.id === parseInt(id))
    return(

        <React.Fragment>
        <MyModal 
            open
            noAction
            cancelRouteStep={2}
            header={'Edit Category'}
            content={
                <Formik
                    initialValues={product}
                    validationSchema={productSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <ProductForm />
                        <FormActionButtons navigateOnCancel={navigateToList} />
                    </Form>
                </Formik>
            }
        />       
    </React.Fragment>
    )
}

export default withNavigationAndSubmit(
    ProductEdit,
    objectListPath,
    editProduct,
    'product',
    true,
    false
);