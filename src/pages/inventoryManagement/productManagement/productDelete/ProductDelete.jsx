import React from 'react';
import DeleteActionButtons from '../../../../components/DeleteActionButtons';
import withDeleteAndNavigation from '../../../../components/hocs/withDeleteAndNavigation';
import productListPath from '../productListPath';
import { deleteProduct } from '../../../../actions';
import MyModal from '../../../../components/Modal';

const objectListPath = productListPath;

const ProductDelete = props => {

    const { id, products, onCancelClick, onDeleteClick } = props
    
    let prompt;
    let productName;
    let productExist;
    if(id){
        try{
            productName = products.find(product => 
                product.id === parseInt(id)).name
            prompt = `Are you sure want to delete ${productName}?`
            productExist = true;
        }
        catch{
            productExist = false;
            prompt = 'This is not a existing product id, please enter a correct product id.'
        }
    }

    if(productExist){
        return(
            <React.Fragment>
                <MyModal 
                    open
                    header={'Delete Product'}
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


export default withDeleteAndNavigation(ProductDelete, 'product', deleteProduct, objectListPath);