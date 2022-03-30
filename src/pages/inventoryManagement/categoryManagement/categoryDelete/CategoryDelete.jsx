import React from 'react';
import DeleteActionButtons from '../../../../components/DeleteActionButtons';
import withDeleteAndNavigation from '../../../../components/hocs/withDeleteAndNavigation';
import categoryListPath from '../categoryListPath';
import { deleteCategory } from '../../../../actions';
import MyModal from '../../../../components/Modal';

const objectListPath = categoryListPath;

const CategoryDelete = props => {

    const { id, categories, onCancelClick, onDeleteClick } = props
    
    let prompt;
    let categoryName;
    let categoryExist;

    if(id){
        try{
            categoryName = categories.find(category => 
                category.id === parseInt(id)).name
            prompt = `Are you sure want to delete ${categoryName} category?`
            categoryExist = true;
        }
        catch{
            categoryExist = false;
            prompt = 'This is not a existing category id, please enter a correct category id.'
        }
    }

    if(categoryExist){
        return(
            <React.Fragment>
                <MyModal 
                    open
                    header={'Delete Category'}
                    content={prompt}
                    cancelRouteStep={2}
                    actions={<DeleteActionButtons 
                    onCancelClick={onCancelClick}
                    onDeleteClick={() => onDeleteClick(id)} 
                    />}
                />
            </React.Fragment>
        )}

        return(
            <React.Fragment>
                <MyModal 
                    open
                    header={'Incorrect request'}
                    cancelRouteStep={2}
                    content={prompt}
                />
            </React.Fragment>
        )

}


export default withDeleteAndNavigation(CategoryDelete, 'category', deleteCategory, objectListPath);