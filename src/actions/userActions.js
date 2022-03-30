import { ADD_USER } from './types'

export const addUser = userEmail => {
    return{
        type: ADD_USER,
        payload: userEmail
    }
}