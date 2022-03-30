import { ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY, INCREASE_CATEGORY_ID } from './types';

export const addCategory = category => {
    return {
        type: ADD_CATEGORY,
        payload: { category }
    }
}

export const editCategory = category => {
    return {
        type: EDIT_CATEGORY,
        payload: { category }
    }
}

export const deleteCategory = categoryId => {
    return {
        type: DELETE_CATEGORY,
        payload: { categoryId }
    }
}

export const increaseCategoryId = () => {
    return{ type: INCREASE_CATEGORY_ID }
}