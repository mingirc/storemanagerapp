import React from 'react';
import { connect } from 'react-redux';
import { increaseCategoryId, increaseProductId } from '../../actions';


// HOC enhances the wrapped component with onSubmit function. 
// onSubmit function can be used with only categories and products 
// both for adding new or editing existing item.
const withSubmit = (WrappedComponent, action, obj, doReset, incrementId) => {
    
    // This commented method has not been used in this app. Just for info.
    // pass an action list from WrappedComponent like [addCategory, editCategory] and 
    // use fetchActions as second argument of first paranthesis of the react-redux connect method.
    // const fetchActions = actionList.reduce((o, fn) => ({...o, [fn.name]: fn}), {});

    let increaseId;

    const defineIncreaseId = () => {
        switch(obj){
            case 'product':
                increaseId = () =>  increaseProductId()
                break;
            case 'category':
                increaseId = () =>  increaseCategoryId()
                break;
            default:
                increaseId= () => {console.log('something went wrong')}
                break;
        }
    }
    
    // Select increaseId between product and category.
    defineIncreaseId();
    
    // combine requested action with the selected increaseId function. 
    // Which will be passed to connect()() HOC.
    const requestedAction = { reqAction: action, increaseId }

    const WithSubmit = props => {
       
        const onSubmit = (values, { resetForm }) => {

            // apply requested function with the values that 
            // send by wrapped component over onSubmit function..
            props.reqAction(values)

            // parses categoryId received as string to Int.
            if(values.categoryId){
                values.categoryId = parseInt(values.categoryId)
            }

            if(incrementId){
                try{
                    props.increaseId()
                }
                catch{
                    // do not try to parse --> do nothing
                }
            }

            if(doReset){
                resetForm();
            }

            if(props.navigateToList){
                const { navigateToList } = props
                navigateToList();
            }
        }

        return(
            <WrappedComponent onSubmit={onSubmit} {...props} />
        )
    }

    // Define necessary objects to redux store's state.
    const mapStateToProps = state => {
        if(obj === 'category'){
            return {
                categories: state.categories,
                maxCategoryId: state.maxCategoryId
            }
        } else if(obj === 'product'){
            return {
                products: state.products,
                maxProductId: state.maxProductId
            }
        }
        
    }

    return connect(mapStateToProps, requestedAction)(WithSubmit);
}

export default withSubmit;


