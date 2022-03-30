import React from 'react';
import { connect } from 'react-redux';

// HOC for enhancing components with delete function. 
// Especially for categories and products.
const withDelete = (WrappedComponent, obj, deleteFnc, objectListPath) => {
  
    const WithDelete = props => {

        const { deleteFnc } = props
      
        const onDeleteClick = id => {
            deleteFnc(id)
            if(props.navigateToList){
                const { navigateToList } = props
                navigateToList(objectListPath);
            }
        }

        const onCancelClick = () => {
            if(props.navigateToList){
                const { navigateToList } = props
                navigateToList(objectListPath);
            }
        }

        return(
            <WrappedComponent 
                onDeleteClick={id => onDeleteClick(id)} 
                onCancelClick={onCancelClick} {...props} 
            />
        )
    }

    const mapStateToProps = state => {
        if(obj==='category'){
            return{ categories: state.categories }
        }else if(obj==='product'){
            return{ products: state.products }
        }
        
    }

    return connect(mapStateToProps, { deleteFnc })(WithDelete);
}

export default withDelete;


