import { IS_AUTH, IS_OPEN } from '../types/LoginPage';

let initialState = {
    isAuth: false,
    isProfileOpen: false,
}

const loginPageReducer = (state = initialState, action) => {
    if (action.type === IS_AUTH){
        return {
            ...state,
            isAuth: true,
        }
    }
    if (action.type === IS_OPEN){
        return {
            ...state,
            isProfileOpen: true,
        }
    }
    return state;
}

export default loginPageReducer;