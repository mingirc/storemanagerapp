import React from 'react';
import { Formik, Form } from 'formik';
import categorySchema from '../../../../schemas/categorySchema';
import CategoryForm from '../CategoryForm';
import { editCategory } from '../../../../actions';
import FormActionButtons from '../../../../components/FormActionButtons';
import withNavigationAndSubmit from '../../../../components/hocs/withSubmitWithNavigation';
import categoryListPath from '../categoryListPath';
import MyModal from '../../../../components/Modal';

const objectListPath = categoryListPath;

const CategoryEdit = props => {

    const { navigateToList, onSubmit, categories, id } = props;
    const category = categories.find(category => category.id === parseInt(id))
    
    return(
        <React.Fragment>
            <MyModal 
                open
                noAction
                cancelRouteStep={2}
                header={'Edit Category'}
                content={
                    <Formik
                    initialValues={category}
                    validationSchema={categorySchema}
                    onSubmit={onSubmit}
                    >
                        <Form>
                            <CategoryForm />
                            <FormActionButtons 
                            navigateOnCancel={navigateToList} />
                        </Form>
                    </Formik>
                }
            />       
        </React.Fragment>
    )
}

export default withNavigationAndSubmit(
    CategoryEdit,
    objectListPath,
    editCategory,
    'category',
    true,
    false
);