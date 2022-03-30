import React from 'react';
import withNavigationAndSubmit from '../../../../components/hocs/withSubmitWithNavigation';
import categorySchema from '../../../../schemas/categorySchema';
import { Formik, Form } from 'formik';
import CategoryForm from '../CategoryForm';
import { addCategory } from '../../../../actions';
import FormActionButtons from '../../../../components/FormActionButtons';
import categoryListPath from '../categoryListPath';
import MyModal from '../../../../components/Modal';
import '../../../style.css';

const objectListPath = categoryListPath;

const CategoryAdd = props => {

    const { navigateToList, onSubmit, maxCategoryId } = props

    const newCategoryInitialValues = {
        id: maxCategoryId + 1,
        name: '',
        imageUrl: ''
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
            initialValues={newCategoryInitialValues}
            validationSchema={categorySchema}
            onSubmit={onSubmit}
        >
            <Form>
                <CategoryForm />
                <FormActionButtons navigateOnCancel={navigateToList} />
            </Form>
        </Formik>
        }
    />       
    </React.Fragment>

    )
}

export default withNavigationAndSubmit(
    CategoryAdd,
    objectListPath,
    addCategory,
    'category',
    true,
    true
);