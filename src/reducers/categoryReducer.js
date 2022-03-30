import { categories } from '../data';
import { ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY } from '../actions/types';

const categoryReducer = (categoryList = [ ...categories ], action) => {
    switch(action.type){
        case ADD_CATEGORY:
            categoryList.push(action.payload.category)
            return [ ...categoryList ]
        case EDIT_CATEGORY:{
            let editedCategoryList = []
            categoryList.map(category => {
                    if(category.id === parseInt(action.payload.category.id)){
                        category = action.payload.category
                    }
                    editedCategoryList = [ ...editedCategoryList, category ]
                })
            return [ ...editedCategoryList ]
        }
        case DELETE_CATEGORY:
            return [ ...categoryList.filter(category => 
                category.id !== parseInt(action.payload.categoryId)) ]
        default:
            return categoryList
    }
}

export default categoryReducer;