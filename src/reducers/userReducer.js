import { users } from '../data';
import { ADD_USER } from '../actions/types';

const userReducer = (state=users, action) => {
    switch(action.type){
        case ADD_USER:
            return [ ...state, { id: 2, name: action.payload } ];
        default:
            return state;
    }
}

export default userReducer;